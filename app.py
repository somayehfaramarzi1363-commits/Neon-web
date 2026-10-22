import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv
import psycopg2
from psycopg2.extras import RealDictCursor

load_dotenv()
app = Flask(__name__, static_folder=".", static_url_path="")

@app.get("/")
def home():
    return app.send_static_file("index.html")


@app.post("/api/orders")
def create_order():
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", data.get("customer_name", ""))).strip()
    contact = str(data.get("contact", data.get("customer_email", ""))).strip()
    site_type = str(data.get("site_type", data.get("service_type", ""))).strip()
    details = str(data.get("details", data.get("project_details", ""))).strip()
    budget = str(data.get("budget", "unknown")).strip() or "unknown"

    if not name or not contact or not site_type or not details:
        return jsonify(error="نام، راه ارتباطی، نوع سایت و توضیحات پروژه الزامی است."), 400
    if len(name) > 100 or len(contact) > 150 or len(details) > 3000:
        return jsonify(error="طول یکی از فیلدها بیش از حد مجاز است."), 400
    if site_type not in {"corporate", "store", "personal", "custom"}:
        return jsonify(error="نوع سایت معتبر نیست."), 400
    if budget not in {"unknown", "basic", "medium", "advanced"}:
        return jsonify(error="بودجه معتبر نیست."), 400
    if not DATABASE_URL:
        return jsonify(error="DATABASE_URL تنظیم نشده است."), 500

    try:
        with psycopg2.connect(DATABASE_URL, connect_timeout=10) as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """INSERT INTO public.website_orders
                       (name, contact, site_type, details, budget)
                       VALUES (%s, %s, %s, %s, %s)
                       RETURNING id""",
                    (name, contact, site_type, details, budget),
                )
                order_id = cur.fetchone()[0]
        return jsonify(message="سفارش ثبت شد.", order_id=order_id), 201
    except Exception:
        app.logger.exception("Order insert failed")
        return jsonify(error="ثبت سفارش ناموفق بود."), 500


if __name__ == "__main__":
    app.run(debug=False, host="0.0.0.0", port=int(os.getenv("PORT", "5000")))
