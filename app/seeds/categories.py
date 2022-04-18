from app.models import db, Category


def seed_categories():
    action = Category(name="Action")
    science_fiction = Category(name="Science Fiction")
    music = Category(name="Music")
    coming_of_age = Category(name="Coming of Age")
    comedies = Category(name="Comedies")
    documentaries = Category(name="Documentaries")
    family = Category(name="Family")
    classics = Category(name="Classics")
    romantic = Category(name="Romantic")
    mysteries = Category(name="Mysteries")
    kids = Category(name="Kids")

    db.session.add(action)
    db.session.add(science_fiction)
    db.session.add(music)
    db.session.add(coming_of_age)
    db.session.add(comedies)
    db.session.add(documentaries)
    db.session.add(family)
    db.session.add(classics)
    db.session.add(romantic)
    db.session.add(mysteries)
    db.session.add(kids)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
