from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__, template_folder="./src/views",static_url_path='/assets')

@app.route("/", methods=["GET", "POST"])
def home():
  if (request.method == "GET"):
    return render_template("index.html", dados={"age": False})
  else:
   
    if(request.form["nome"] and request.form["birthday"]):
      name = request.form['nome']
      [year, month,day] = [int(date) for date in request.form['birthday'].split('-')]
      [tYear, tMonth, tDay] = [int(date) for date in datetime.today().strftime('%Y-%m-%d').split('-')]
     
      
      age = tYear - year if tMonth > month else tYear - year - 1 
     
      
      return render_template('index.html', dados = {"age":age,"name":name})
    else:
      return render_template('index.html', dados = {"erro":"Erro"})


@app.errorhandler(404)
def not_found(error):
  return render_template('not-found.html')

app.run(port=8080, debug=True)