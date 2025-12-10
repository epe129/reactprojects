from flask import Flask, request, jsonify
import json

app = Flask(__name__)

DataInThePage = []

# here Python gets the information
@app.route('/api/home', methods=['GET', 'POST'])
def home():

    if request.method == 'POST':
        data = request.get_json()

        DataInThePage.append(data)

        TheBlogText = {
            "title": f"{data["title"]}",
            "blogi" : f"{data["blogi"]}"
        }
        with open("data.json", "r+") as file:
            file_data = json.load(file)
            
            file_data["blogit"].append(TheBlogText)
            
            file.seek(0)
            
            json.dump(file_data, file, indent=4)        

    return "no data here"

@app.route('/api/two', methods=['GET', "POST"])
def two():
    data = []
    poista = ""
    updated_data = {}
    updated_data2 = {
        "blogit": [
            ]
        }
    
    with open("data.json", "r+") as file:
        file_data = json.load(file)
        for value in file_data["blogit"]:
            data.append(value)

    if request.method == "POST":
        datarequest = request.get_json()

        poista = datarequest["poista"]

        print(poista)

        pituus = len(datarequest["poista"]) - 1
        
        res = poista[:pituus] + poista[pituus + 1:]

        poista = res

        if poista == "":
            pass
        else:
            with open("data.json", "r+") as tiedosto:
                dataBlog = tiedosto.read()
                tiedot = json.loads(dataBlog)
                
                for key, value in tiedot.items():
                    for d in value:
                        if d["title"] == poista:
                            d.pop("title")
                            d.pop("blogi")
                        else:                  
                            updated_data.update({key : value})
                    
            for c , s in updated_data.items():
                for w in s:
                    if bool(w) == False:
                        continue
                    else:
                        updated_data2["blogit"].append(w)

            with open('data.json', 'w') as file:
                json.dump(updated_data2,file,indent=2)
    
    return jsonify(data)


if __name__ == '__main__':
    app.run(port=5300)
