from flask import Flask, request, jsonify, redirect
import json

app = Flask(__name__)

@app.route("/")
def home():
    return redirect("/api/post")

@app.route('/api/post', methods=['POST', "GET"])
def post():
    h = []
    
    if request.method == 'POST':

        content = request.get_json()
        
        otsikko = {
            "title": content["title"],
        }

        with open("./data.json", 'r+') as file:
            file_data = json.load(file)            
            file_data["haetut_Otsikot"].append(otsikko)
            file.seek(0)
            json.dump(file_data, file, indent=4)
    
    with open('./data.json', 'r') as file:
        data = json.load(file)
        for c in data["haetut_Otsikot"]:
            h.append(c["title"])

    return jsonify({"titles": h})

if __name__ == '__main__':
    app.run(debug=True)