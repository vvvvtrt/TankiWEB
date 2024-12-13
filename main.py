from flask import Flask, send_from_directory
import os

app = Flask(__name__)

@app.route('/port/<path:filename>')
def get_port(filename):
    directory = os.getcwd() + "/front_port"
    print(directory)
    print(filename)

    if os.path.isfile(os.path.join(directory, filename)):
        return send_from_directory(directory, filename)
    else:
        return 'File not found', 404

@app.route('/desert/<path:filename>')
def get_desert(filename):
    directory = os.getcwd() + "/front_desert"
    print(directory)
    print(filename)

    if os.path.isfile(os.path.join(directory, filename)):
        return send_from_directory(directory, filename)
    else:
        return 'File not found', 404


@app.route('/bunker/<path:filename>')
def get_bunker(filename):
    directory = os.getcwd() + "/front"
    print(directory)
    print(filename)

    if os.path.isfile(os.path.join(directory, filename)):
        return send_from_directory(directory, filename)
    else:
        return 'File not found', 404


@app.route('/')
def get_file():
    directory = os.getcwd()
    return send_from_directory(directory, "index.html")

@app.route('/<path:filename>')
def get_file_(filename):
    directory = os.getcwd()
    return send_from_directory(directory, filename)



if __name__ == '__main__':
    app.run(port=8001)