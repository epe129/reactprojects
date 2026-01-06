from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/get', methods=['GET'])
def get():
    return jsonify({"message": "hello"})


@app.route('/api/post', methods=['POST'])
def post():
    
    if request.method == 'POST':
        content = request.get_json()

        print(content)

    return jsonify({"message": "hello"})


if __name__ == '__main__':
    app.run(debug=True)