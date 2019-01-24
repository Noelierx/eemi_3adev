from flask import Flask, render_template, request
from models import db
from models.Personne import Personne

app = Flask(__name__)

personnes = [{"prenom": "Marine", "nom": "Durand", "age": 34}]

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///eemidb.sqlite3'

with app.app_context():
db.init_app(app)
db.create_all()

@app.route("/")
def hello():
    return render_template("index.html")


@app.route("/form", methods=["POST"])
def form():
    firstname = request.form.get("firstname")
    lastname = request.form.get("lastname")
    age = request.form.get("age")
    personne = Personne(lastname, firstname, age)
    db.session.add(personne)
    db.session.commit()
    personnes.append({"prenom": firstname, "nom": lastname, "age": age})

    print(firstname)
    return render_template("result.html", liste=personnes)


app.run(port=8080, debug=True)
