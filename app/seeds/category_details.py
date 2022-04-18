from app.models import db, Category_Detail


def seed_category_details():
    olivia_music = Category_Detail(category_id=3, content_id=1)
    olivia_coming_of_age = Category_Detail(category_id=4, content_id=1)
    olivia_documentary = Category_Detail(category_id=6, content_id=1)

    nate_coming_of_age = Category_Detail(category_id=4, content_id=2)
    nate_family = Category_Detail(category_id=7, content_id=2)
    nate_comedy = Category_Detail(category_id=5, content_id=2)
    nate_music = Category_Detail(category_id=3, content_id=2)

    simpsons_comedy = Category_Detail(category_id=5, content_id=3)
    simpsons_family = Category_Detail(category_id=7, content_id=3)

    puppies_kids = Category_Detail(category_id=11, content_id=4)
    puppies_family = Category_Detail(category_id=7, content_id=4)

    moonkinght_action = Category_Detail(category_id=1, content_id=5)
    moonkinght_science_fiction = Category_Detail(category_id=2, content_id=5)

    puppies_kids = Category_Detail(category_id=11, content_id=6)
    puppies_family = Category_Detail(category_id=7, content_id=6)

    eternals_action = Category_Detail(category_id=1, content_id=7)
    eternals_science_fiction = Category_Detail(category_id=2, content_id=7)

    endgame_action = Category_Detail(category_id=1, content_id=8)
    endgame_science_fiction = Category_Detail(category_id=2, content_id=8)

    turning_red_coming_of_age = Category_Detail(category_id=4, content_id=9)
    turning_red_kids = Category_Detail(category_id=11, content_id=9)
    turning_red_family = Category_Detail(category_id=7, content_id=9)

    ice_age_kids = Category_Detail(category_id=11, content_id=10)
    ice_age_family = Category_Detail(category_id=7, content_id=10)
    ice_age_comedy = Category_Detail(category_id=5, content_id=10)

    lifted_kids = Category_Detail(category_id=11, content_id=11)
    lifted_family = Category_Detail(category_id=7, content_id=11)
    lifted_comedy = Category_Detail(category_id=5, content_id=11)
    lifted_science_fiction = Category_Detail(category_id=2, content_id=11)

    ciao_alberto_kids = Category_Detail(category_id=11, content_id=12)
    ciao_alberto_family = Category_Detail(category_id=7, content_id=12)
    ciao_alberto_comedy = Category_Detail(category_id=5, content_id=12)

    visions_action = Category_Detail(category_id=1, content_id=13)
    visions_science_fiction = Category_Detail(category_id=2, content_id=13)

    mandalorian_action = Category_Detail(category_id=1, content_id=14)
    mandalorian_science_fiction = Category_Detail(category_id=2, content_id=14)

    new_hope_action = Category_Detail(category_id=1, content_id=15)
    new_hope_science_fiction = Category_Detail(category_id=2, content_id=15)

    return_of_the_jedi_action = Category_Detail(category_id=1, content_id=16)
    return_of_the_jedi_science_fiction = Category_Detail(category_id=2, content_id=16)

    national_parks_documentary = Category_Detail(category_id=6, content_id=17)

    earth_month_documentary = Category_Detail(category_id=6, content_id=18)

    below_zero_documentary = Category_Detail(category_id=6, content_id=19)

    whales_documentary = Category_Detail(category_id=6, content_id=20)

    db.session.add(olivia_music)
    db.session.add(olivia_coming_of_age)
    db.session.add(olivia_documentary)
    db.session.add(nate_coming_of_age)
    db.session.add(nate_family)
    db.session.add(nate_comedy)
    db.session.add(nate_music)
    db.session.add(simpsons_comedy)
    db.session.add(simpsons_family)
    db.session.add(puppies_kids)
    db.session.add(puppies_family)
    db.session.add(moonkinght_action)
    db.session.add(moonkinght_science_fiction)
    db.session.add(puppies_kids)
    db.session.add(puppies_family)
    db.session.add(eternals_action)
    db.session.add(eternals_science_fiction)
    db.session.add(endgame_action)
    db.session.add(endgame_science_fiction)
    db.session.add(turning_red_coming_of_age)
    db.session.add(turning_red_kids)
    db.session.add(turning_red_family)
    db.session.add(ice_age_kids)
    db.session.add(ice_age_family)
    db.session.add(ice_age_comedy)
    db.session.add(lifted_comedy)
    db.session.add(lifted_family)
    db.session.add(lifted_kids)
    db.session.add(lifted_science_fiction)
    db.session.add(ciao_alberto_comedy)
    db.session.add(ciao_alberto_family)
    db.session.add(ciao_alberto_kids)
    db.session.add(visions_action)
    db.session.add(visions_science_fiction)
    db.session.add(mandalorian_action)
    db.session.add(mandalorian_science_fiction)
    db.session.add(new_hope_action)
    db.session.add(new_hope_science_fiction)
    db.session.add(return_of_the_jedi_action)
    db.session.add(return_of_the_jedi_science_fiction)
    db.session.add(national_parks_documentary)
    db.session.add(earth_month_documentary)
    db.session.add(below_zero_documentary)
    db.session.add(whales_documentary)

    db.session.commit()


def undo_category_details():
    db.session.execute('TRUNCATE category_details RESTART IDENTITY CASCADE;')
    db.session.commit()
