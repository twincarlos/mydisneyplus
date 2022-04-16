from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    disney = User(
        username='Disney', email='disney@aa.io', password='password', current_profile_id=None)
    marvel = User(
        username='Marvel', email='marvel@aa.io', password='password', current_profile_id=None)
    pixar = User(
        username='Pixar', email='pixar@aa.io', password='password', current_profile_id=None)
    starwars = User(
        username='Star Wars', email='starwars@aa.io', password='password', current_profile_id=None)
    natgeo = User(
        username='NatGeo', email='natgeo@aa.io', password='password', current_profile_id=None)

    db.session.add(disney)
    db.session.add(marvel)
    db.session.add(pixar)
    db.session.add(starwars)
    db.session.add(natgeo)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
