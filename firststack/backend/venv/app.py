from flask import Flask, jsonify, request, render_template, redirect
import sqlite3

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def page():
    data = []

    conn = sqlite3.connect('/home/lenni/home/koodit/nextprojects/firststack/backend/venv/db/db.db')

    cursor_obj = conn.cursor()

    statement = '''SELECT * FROM KIRJA'''

    cursor_obj.execute(statement)
    
    output = cursor_obj.fetchall()
    
    for row in output:
        data.append(row)
        print(row)

    conn.commit()

    conn.close()

    return render_template("index.html", data=data)

@app.route("/api/hello", methods=["GET"])
def api1():
    conn = sqlite3.connect('/home/lenni/home/koodit/nextprojects/firststack/backend/venv/db/db.db')

    cursor_obj = conn.cursor()

    statement = '''SELECT * FROM KIRJA'''

    cursor_obj.execute(statement)
    
    kirjat = []

    output = cursor_obj.fetchall()        

    for c in output:
        kirjat.append(c)
    
    return jsonify(kirjat)


@app.route("/api/post", methods=["POST"])
def api2():
    getData = request.json

    conn = sqlite3.connect('/home/lenni/home/koodit/nextprojects/firststack/backend/venv/db/db.db')

    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS KIRJA (
            Kirjannimi STRING NOT NULL,
            kirjantekija STRING NOT NULL,
            KirjanKuvaus STRING NOT NULL,
            julkaispaiva DATE NOT NULL,
            hinta INTEGER NOT NULL
        );
    """)

    cursor.execute(f"INSERT INTO KIRJA (Kirjannimi, kirjantekija, KirjanKuvaus, julkaispaiva, hinta) VALUES ('{getData["nimi"]}', '{getData["tekija"]}','{getData["kuvaus"]}','{getData["maara"]}', '{getData["hinta"]}')")

    conn.commit()

    conn.close()

    return jsonify({"message": "Hello from Flask!"})

@app.route("/poista", methods=["POST"])
def poista():
    if request.method == 'POST':
                
        GETtitle = request.form['button']

        print(GETtitle)

        connection_obj = sqlite3.connect('/home/lenni/home/koodit/nextprojects/firststack/backend/venv/db/db.db')

        cursor_obj = connection_obj.cursor()

        cursor_obj.execute(f'DELETE FROM KIRJA WHERE Kirjannimi="{GETtitle}"')

        connection_obj.commit()

        connection_obj.close()
    
    return redirect("/")

if __name__ == "__main__":
    app.run()
    