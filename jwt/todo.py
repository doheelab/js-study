from flask import Flask, jsonify, request, make_response
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SECRET_KEY"] = "thisissecret"
app.config["SQLALCHEMY_DATABASE_URI"] = "./todo.db"

db = SQLAlchemy(app)

# 테이블 생성
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    name = db.Column(db.String(50))
    password = db.Column(db.String(80))
    admin = db.Column(db.Boolean)


class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(50))
    complete = db.Column(db.Boolean)
    user_id = db.Column(db.Integer)


# get: 유저 id와 패스워드로 token을 발급
@app.route("/login")
def login():
    return ""


# get:헤더에 'x-access-token' 을 가지고 접근하면 유저 정보를 리턴
# post: Body에 ID와 비밀번호를 실어 보내면 회원가입
@app.route("/user")
def user():
    return ""


# get: todo 리스트 리턴
# post: Body에 text를 실어 보내면 todo 리스트 등록
# put: todo의 'complete'를 true로 변경
@app.route("/todo")
def todo():
    return ""


if __name__ == "__main__":
    app.run(debug=True)
