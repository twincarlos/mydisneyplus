from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    disney = User(
        username='Disney', email='disney@aa.io', password='password', profile_picture='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=640&aspectRatio=1.78&format=png')
    marvel = User(
        username='Marvel', email='marvel@aa.io', password='password', profile_picture='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=640&aspectRatio=1.78&format=png')
    pixar = User(
        username='Pixar', email='pixar@aa.io', password='password', profile_picture='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=640&aspectRatio=1.78&format=png')
    starwars = User(
        username='Star Wars', email='starwars@aa.io', password='password', profile_picture='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=640&aspectRatio=1.78&format=png')
    natgeo = User(
        username='NatGeo', email='natgeo@aa.io', password='password', profile_picture='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=640&aspectRatio=1.78&format=png')

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
