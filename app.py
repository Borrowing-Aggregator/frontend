from flask import Flask, request, render_template, make_response
app = Flask(__name__)

@app.route('/', methods=['GET'])
def main():
    resp = make_response(render_template('index.html'))
    return resp
    
# run the application.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production application.
    app.debug = True
    app.run()