from flask import Flask, request

app = Flask(__name__)

fn = "cookies.txt"


@app.route("/append", methods=["POST"])
def append():
    content = request.form["content"]
    with open(fn, "a") as fw:
        fw.write(content + "\n")
    return "success"
