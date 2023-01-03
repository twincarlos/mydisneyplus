from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Category(db.Model):
    __tablename__ = "categories"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    category_detail = db.relationship("Category_Detail", back_populates="category", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }
