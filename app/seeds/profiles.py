from app.models import db, Profile

def seed_profiles():
    profile_1 = Profile(owner_id=1, name="Profile 1", avatar="https://i.imgur.com/Kql7cQn.png")
    profile_2 = Profile(owner_id=1, name="Profile 2", avatar="https://i.imgur.com/pmfm5nh.png")
    profile_3 = Profile(owner_id=1, name="Profile 3", avatar="https://i.imgur.com/EVLuAJu.png")

    db.session.add(profile_1)
    db.session.add(profile_2)
    db.session.add(profile_3)

    db.session.commit()


def undo_profiles():
    db.session.execute('TRUNCATE profiles RESTART IDENTITY CASCADE;')
    db.session.commit()
