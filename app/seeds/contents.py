from app.models import db, Content


def seed_contents():
    # DISNEY ORIGINALS
    olivia = Content(
        creator_id=1,
        content_type="Movie",
        title="Olivia Rodrigo",
        description="Grammy® nominated singer-songwriter Olivia Rodrigo takes a familiar road trip from Salt Lake City, where she began writing her debut album “SOUR,” to Los Angeles. Along the way, Rodrigo recounts the memories of writing and creating her record-breaking debut album and shares her feelings as a young woman navigating a specific time in her life.",
        media="https://www.youtube.com/watch?v=O3FNru8idcY",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/94F822EFACA50B2411084BBC1602E53A6E69CC7F6D3E7EA5B4E8F2F6976444F2/scale?width=1920&aspectRatio=1.78&format=png",
        banner="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/411A8CF66D2A2B16759AF9CA2390C054E153FA1F6790D465EC54B7ECC13F8AF5/compose?width=2880&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F96E93AE760EF7062D5BB813353CBAA63994A491EAC5AEC24209D61B724FAF1/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/572864A0226D1595C18FD4D9B1398BBB0A354092DF5EEE7FF0FAAC71E229FA6D/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    nate = Content(
        creator_id=1,
        content_type="Show",
        title="Better Nate Than Ever",
        description="Thirteen-year-old Nate has big Broadway dreams. But when he isn't cast in the school play, he and his best friend Libby sneak off to the Big Apple, where he's unexpectedly reunited with his long-lost Aunt Heidi. Together they must prove that life’s greatest adventures are only as big as your dreams.",
        media="https://www.youtube.com/watch?v=xwdQPXTMUQc",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/707EA52C3438DE099EDC2870ADEE9079BC4E3E8A4C796FF4D08BD5C5B095B18A/scale?width=1920&aspectRatio=1.78&format=png",
        banner="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/23CEC1B32ED414B352C11E426C607B2C4E40A6C1B94753023F5A580806331904/compose?width=2880&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ECFC43F9A606D4CBB7AE9AD16353758479FBA3B0F1CEB84E04B6241459739A2F/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A18258286904A50AB665B6BA6B76307B854CA3502147D9F6BF4E72031B4FD808/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    simpsons = Content(
        creator_id=1,
        content_type="Show",
        title="The Simpsons",
        description="This animated comedy focuses on the eponymous family in the town of Springfield. The head of the Simpson family, Homer, is not a typical family man. A nuclear-plant employee, he does his best to lead his family but often finds that they are leading him. The family includes loving, blue-haired matriarch Marge, troublemaking son Bart, overachieving daughter Lisa and baby Maggie.",
        media="https://www.youtube.com/watch?v=_jgYEYERYFQ",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/995C7F1DAFB6711C3F855C7C5FAFB27FF45B0B40FF23782040E25B68EEB8A1C8/scale?width=1920&aspectRatio=1.78&format=png",
        banner="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F0F95D5AE5AF84A090E26BB2CD2633D7038BF6A1528804762BEA87FE4F6A738/compose?width=2880&aspectRatio=3.91&format=jpeg&label=391_scrim",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8258E24392B56F8E83E59BDEA7F3660085BA5A7022B29FD5A41E5ECB6BAC3AD1/scale?width=800&aspectRatio=1.78&format=jpeg",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5949F0FEA2D3A5F8BD0B1440FFAF993528BF526E5476B468F4E0FBEDD7C98E6D/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    puppies = Content(
        creator_id=1,
        content_type="Movie",
        title="Puppy Dog Pals",
        description="Two fun-loving Pug puppies, Bingo and Rolly, are brothers on a mission for fun and adventure!",
        media="https://www.youtube.com/watch?v=Spx0xpYQ6D4",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D2F5A69CE9FAB144074C4EA63A543341777BE023555ACFEF0BF15E14A8689291/scale?width=1344&aspectRatio=1.78&format=png",
        banner="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4FD15BD4C47C246AF5739FB0E19E50426528D2C367EB772D8F12F5B635963C5B/compose?width=2880&aspectRatio=3.91&format=jpeg&label=391_scrim",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/607ED84F14B07E8609E67821185D9B129D0EE8B355B6D3FAEA2E7354204F647E/scale?width=800&aspectRatio=1.78&format=jpeg",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3C23E10C7A6113E5780720C6992B81152C96EF40363A486B947C3BA796739D56/scale?width=1920&aspectRatio=1.78&format=jpeg",
    )

    # MARVEL
    moonkinght = Content(
        creator_id=2,
        content_type="Show",
        title="Moon Knight",
        description="Steven Grant, a mild-mannered man who works a mundane job, begins to suspect that his life may not be his own when an alter living inside him begins to emerge.",
        media="https://www.youtube.com/watch?v=kPZDL8wFQL8",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1501A383B157F856A150A96F61A1287F15FA5E25A2E66AF50C7B0226FD90E67C/scale?width=1920&aspectRatio=1.78&format=png",
        banner="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/51BA6DC1435E904C9A36BEC57BFBA797D9E59CC812EA855821CBB58EC9329BD6/compose?width=2880&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/14EDC8643672C751EEF6FE9C0CD92065CCC2324981EFCC927375C3450D790122/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7CBE13FF54314360482A2082861810F39B94CBFEA27E54054FF886490EEDE70C/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    spidey = Content(
        creator_id=2,
        content_type="Show",
        title="Spidey And His Amazing Friends",
        description="Spidey, Ghost-Spider, and Miles Morales team up to become The Spidey Team! With a little help from other Avenger friends, these superheroes will work together to save the day!",
        media="https://www.youtube.com/watch?v=wktBC7XE28o",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/48A93F0D46FDC9315FAF76785916EE98295F92A892433A87978B0297825A79BB/scale?width=1600&aspectRatio=1.78&format=png",
        banner="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A219DAC8ABAF36DC5B2B4DAFCA0D41E8EA695736031D20459FFC0EDCD15D33A3/compose?width=2880&aspectRatio=3.91&format=jpeg&label=391_scrim",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/69F7759BE414BD77AF57D52D6C233E9FB3D4ED1DD598BCC93EAFA148DD4D3D49/scale?width=800&aspectRatio=1.78&format=jpeg",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/39910FA1CB8733FEF073CCC847D886C2E8865B72D42086CF8FC2D4ED37D4AD88/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    eternals = Content(
        creator_id=2,
        content_type="Movie",
        title="The Eternals",
        description="Marvel Studios’ \"Eternals\" follows a group of ancient heroes from beyond the stars who had protected Earth since the dawn of man. When monstrous creatures called Deviants, long thought lost to history, mysteriously return, the Eternals are forced to reunite in order to defend humanity once again.",
        media="https://www.youtube.com/watch?v=XLFsHdE4U_E",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/998140E8ED2E3A7644484D564C861D61CFFCCCE204BD2A64A7C421905C8B3ECB/scale?width=1920&aspectRatio=1.78&format=png",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1250B3C9EEE8DA6888470F1DC25A9DD9C07A876E49168AB22359A295D4E1D803/scale?width=800&aspectRatio=1.78&format=jpeg",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1CF2A4396D6F85ACE8D18205E546F33579E24969EFE3A2ED7B1CF6A518117D28/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    endgame = Content(
        creator_id=2,
        content_type="Movie",
        title="Avengers: Endgame",
        description="The epic conclusion to the Infinity Saga that became a critically acclaimed worldwide phenomenon, this dramatic showdown pits the Avengers against Thanos. After devastating events wiped out half the world’s population and fractured their ranks, the remaining heroes struggle to move forward. But they must come together to restore order and harmony in the universe and bring their loved ones back.",
        media="https://www.youtube.com/watch?v=KCSNFZKbhZE",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/815EFF00A11FFB3EFC0A820BADE3A114F5F665D9AB38B9C74E7A6A03C55B1AA5/scale?width=1344&aspectRatio=1.78&format=png",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/378C6FE4ECCA2BF454E2CF651D135010CBAEE1EA13A67AE96A4D189569B84030/scale?width=800&aspectRatio=1.78&format=jpeg",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DA3D5423E6866707A9AA7AED78BFDF6CCEC38A7AF35C154CA865A5106B492A75/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )

    # PIXAR
    turning_red = Content(
        creator_id=3,
        content_type="Movie",
        title="Turning Red",
        description="Disney and Pixar’s “Turning Red” introduces Mei Lee, a confident, dorky 13-year-old torn between staying her mother’s dutiful daughter and the chaos of adolescence. Her protective, if not slightly overbearing mother, Ming, is never far from her daughter—an unfortunate reality for the teenager. And as if changes to her interests, relationships and body weren’t enough, whenever she gets too excited, she “poofs” into a giant red panda!",
        media="https://www.youtube.com/watch?v=pqdHP2dWQ9M",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/84F74800297C59DB4D5330D966E86B4D98BCE3A4D9677A5CC82F0165B13291AF/scale?width=1920&aspectRatio=1.78&format=png",
        banner="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB2ED0B116CA5BB242F9B258AA2D620D0AE6B0A8A5834F48F316917DC9622EFE/compose?width=2880&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0C2D94D36B55CEB8E3F77F2A94D208216330D18933F3F1AB8D5DE7C912E67A9D/badging?width=1200&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/298B91853FDBB4FAECA6BE4783C20E2DF891AE03C68DBD662F8CE615F7D2CBDC/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    ice_age = Content(
        creator_id=3,
        content_type="Movie",
        title="Ice Age",
        description="Six all-new animated “Ice Age” adventures starring Scrat, the hapless saber-toothed squirrel, who experiences the ups and downs of fatherhood, as he and the adorable, mischievous Baby Scrat, alternately bond with each other and battle for ownership of the highly treasured Acorn.",
        media="https://www.youtube.com/watch?v=QFwJJywzbDs",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/00E2FEBC454354B1B1BCF08279226D385BF2921BCC15C0D4A1EE5B1491678897/scale?width=1920&aspectRatio=1.78&format=png",
        banner="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1FFE9FE73EC4B8F8A3FB8C2B4A7DE2E14A257FD354A95C91CD641B0F5C0FE46F/compose?width=2880&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/351F9B0CB660473D494397B540DB01FE2A3180F61C804A4326429C6F74A82628/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1048B6A179EB5ECDC4983E8FD9908A8EBC65B8C3C71D61C667965DB500CAE983/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    lifted = Content(
        creator_id=3,
        content_type="Show",
        title="Lifted",
        description="A nervous teen alien at a spaceship’s controls must attempt to abduct a sleeping farmer under a stern instructor's watchful eye.",
        media="https://www.youtube.com/watch?v=PjNNcfPZaKE",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6DA55CCC46BC531A8E3EF2EE96F45EA9F30F6BD81F8011B5AAB0F2152FFF27A6/scale?width=1344&aspectRatio=1.78&format=png",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D24C45584018B76F04CB88095F5E8DE258A6DC63A2104528F6794A715FA9CEC8/scale?width=800&aspectRatio=1.78&format=jpeg",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01A3391C861877FA1936AEB3DC711D83E4CD7966F584562A364B86FB44FC39ED/scale?width=1920&aspectRatio=1.78&format=jpeg",
    )
    ciao_alberto = Content(
        creator_id=3,
        content_type="Show",
        title="Ciao Alberto",
        description="With his best friend Luca away at school, Alberto is enjoying his new life in Portorosso working alongside Massimo—the imposing, tattooed, one-armed fisherman of few words—who’s quite possibly the coolest human in the entire world as far as Alberto is concerned. He wants more than anything to impress his mentor, but it’s easier said than done.",
        media="https://www.youtube.com/watch?v=KJZS7oXX5SE",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/00DC99BDD7ACCA1FE108C5C48D6827BB8F1BDBA723A04A79F11568852569E70E/scale?width=1920&aspectRatio=1.78&format=png",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3E62F0985D9570221A0B6241741A03E4F1B41780E92A153D413CE8C8F12A56F5/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C434375E73C9C9E4AFAA4F1365A28A46BDC41364DDC2FF8D1AFCDFB48743711C/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )

    # STAR WARS
    visions = Content(
        creator_id=4,
        content_type="Show",
        title="Star Wars Visions",
        description="Star Wars: Visions is an anthology of animated shorts celebrating Star Wars through the lens of the world’s best anime creators and storytellers.",
        media="https://www.youtube.com/watch?v=jtAsl-0o3O0",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4880C592DAEEA52EA12FA04105D0928F2EC858285771C1625E4B819B117F3ABE/scale?width=1920&aspectRatio=1.78&format=png",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2688CDEDF4AF9EA8E1ED15471E3136F519B8673C0AD196F6FCC27C813FD3F056/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5573AA7AC5D145645A2A8FE6E63339FD39D752E95D5C88031CD2F93ED196BF1C/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    mandalorian = Content(
        creator_id=4,
        content_type="Show",
        title="The Mandalorian",
        description="The Mandalorian joins a mismatched crew of cutthroat mercenaries. The mission is a dangerous one, and more difficult than it first appeared.",
        media="https://www.youtube.com/watch?v=aOC8E8z_ifw",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CE8A949CFE56A92A583718B6BEB2A7B7BA15E9A9301D75A7FEDBD4E35B8109AC/scale?width=1920&aspectRatio=1.78&format=png",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5883B0B519D0B06CB7C5BD61D7D34C1C5C19ED2F8C069443EC95B23C1291F90F/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC6B047B406507623B95A9CC34EF4DA38C42B563AF8362217202F5F09335DD40/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    new_hope = Content(
        creator_id=4,
        content_type="Movie",
        title="Star Wars Episode IV: A New Hope",
        description="Young farm boy Luke Skywalker is thrust into a galaxy of adventure when he intercepts a distress call from the captive Princess Leia. The event launches him on a daring mission to rescue her from the clutches of Darth Vader and the evil Empire.",
        media="https://www.youtube.com/watch?v=vZ734NWnAHA",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E0D53C311E041AEBB9D1B6994B45A5B1FEAC8BA99E45990C9FEDE9E6B85D2B1A/scale?width=1920&aspectRatio=1.78&format=png",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/206EA9D4D93692FA3844225A2A4EC463AAEB69D6A10BACF4F5BAE8FC22F8022A/scale?width=800&aspectRatio=1.78&format=jpeg",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6DC7F4CDBDEF6BBDF2424268D7CD02AC7F35D05B3C167D3F2A963834DBBA150E/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    return_of_the_jedi = Content(
        creator_id=4,
        content_type="Movie",
        title="Star Wars Episode VI: Return Of The Jedi",
        description="When the Empire prepares to crush the Rebellion with a more powerful Death Star, the Rebel fleet counters with a massive attack on the space station. In a final climactic duel, Luke Skywalker confronts Darth Vader.",
        media="https://www.youtube.com/watch?v=5UfA_aKBGMc",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50947450CAB9FDDE16B076EA0394E57EE3E7F18DDE2E0A6DAF6E2FC675AD2D6D/scale?width=1920&aspectRatio=1.78&format=png",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BA39ECA06BA0331C3266A171FE7C074A7BC18925AB53784F3ADF0DBA60555CAA/scale?width=800&aspectRatio=1.78&format=jpeg",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6CD7D8A01C84B073FE44AF3F39F39CC740EC3E4B66F2DD130C66F72C858AD2CD/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )

    # NATGEO
    national_parks = Content(
        creator_id=5,
        content_type="Movie",
        title="America's National Parks",
        description="Celebrate the 100th birthday of \"America’s best idea.\" This premium blue-chip event features beautiful filmmaking and you-are-there experiences of eight of America's most beloved national parks – including Yellowstone, Yosemite, Grand Canyon, and Everglades – offering insightful explorations of some of the most breathtaking landscapes and majestic animals in the world.",
        media="https://www.youtube.com/watch?v=ZADCqbRrNPM",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DE63C0F9D42C0D06CDC82AE97F9CA8929973376F29810BDC6CDC7D09F4C06AC6/scale?width=1600&aspectRatio=1.78&format=png",
        banner="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8B7DFAC90F3EE8A7DF9A3CD2C662967BCF3132E676259AA8D266685D8FBD3B36/compose?width=2880&aspectRatio=3.91&format=jpeg&label=391_scrim",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0169C689066AD6B1AE54E0EAAAD6E346A1ECE2B8A80CE24DC201AA09AA9A9755/scale?width=800&aspectRatio=1.78&format=jpeg",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/162997F683944E7E53A655BFB51A40E634A557F0497CD04A20C4B6FEC29B9587/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    earth_month = Content(
        creator_id=5,
        content_type="Movie",
        title="Earth Month",
        description="Magic of Disney’s Animal Kingdom, narrated by Disney fan-favorite Josh Gad, gives viewers a backstage pass to explore the magic behind two of the world’s most beloved animal experiences, Disney’s Animal Kingdom Theme Park and The Seas with Nemo &amp; Friends at EPCOT. Viewers get unprecedented access to the Parks' animals and meet the animal care experts who have formed remarkable bonds with them.",
        media="https://www.youtube.com/watch?v=vMZuibGSHXE",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/027DFB25400027D5E075B37D9E5F6777875F3D999AD6AAF428C0942B4452D9A6/scale?width=1200&aspectRatio=2.00&format=png",
        banner="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/17CE74B547AC4358F582FF0620C360BCC13A3C7A4BF5BF92FC353ECE38A737A8/scale?width=2880&aspectRatio=3.91&format=png",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B5D24A24A8CB0F5C12CA7DC7B733FAF3494A18116DC37D7192814A9DF7C91685/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C3A661398FAB92A3F558651556AEAE1B593B4BF67C7B4EAA7F0A9A1898A7CD15/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    below_zero = Content(
        creator_id=5,
        content_type="Show",
        title="Life Below Zero",
        description="Deep in Alaska, the primal way lives on. Fight the freeze, brave the wild, hold on to your sanity. And winter is no wonderland when temperatures plummet far below zero. This series follows the drama and hardships experienced by Alaskan households in different corners of this merciless territory as they battle to survive, thrive, and live life on their own terms.",
        media="https://www.youtube.com/watch?v=6OH6svuf44A",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/24C387C76F6D1318FF461E0E09981E2E317B04118A647E655ACB866867A4208F/scale?width=1920&aspectRatio=1.78&format=png",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3543D3C90D050CC6BDEA5FCA631EC59B1E781DFC517CA3FD147D162A5B9E6DA9/scale?width=800&aspectRatio=1.78&format=jpeg",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1758EA692EACB27D7D74FF335606F28C34F9B1E3A30EF0D2D2B345DDE45F9506/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )
    whales = Content(
        creator_id=5,
        content_type="Show",
        title="Secrets Of The Whales",
        description="Belugas and narwhals embark on an adventure through a maze of sea ice to their ancestral summering grounds in the Canadian Arctic.",
        media="https://www.youtube.com/watch?v=xOySOlB78dM",
        logo="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D20E27B936D5D521C2EF17F627B0B2F040035738A33361102CF8DE567B0EAA0B/scale?width=1920&aspectRatio=1.78&format=png",
        thumbnail="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8A74652FB28103AA6A3306200D54AB7D5DE234DD7504FF32F91FF707658FE229/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
        background_picture="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/10A9C52E54C45D0E3860C9F3BDB6B64E48BE92EC2543A55A06F864CA438ED72B/scale?width=2880&aspectRatio=1.78&format=jpeg",
    )

    db.session.add(olivia)
    db.session.add(nate)
    db.session.add(simpsons)
    db.session.add(puppies)
    db.session.add(moonkinght)
    db.session.add(spidey)
    db.session.add(eternals)
    db.session.add(endgame)
    db.session.add(turning_red)
    db.session.add(ice_age)
    db.session.add(lifted)
    db.session.add(ciao_alberto)
    db.session.add(visions)
    db.session.add(mandalorian)
    db.session.add(new_hope)
    db.session.add(return_of_the_jedi)
    db.session.add(national_parks)
    db.session.add(earth_month)
    db.session.add(below_zero)
    db.session.add(whales)

    db.session.commit()


def undo_contents():
    db.session.execute('TRUNCATE contents RESTART IDENTITY CASCADE;')
    db.session.commit()

# new = Content(
#         creator_id=1,
#         content_type="",
#         title="",
#         description="",
#         media="",
#         logo="",
#         # banner="",
#         thumbnail="",
#         background_picture="",
#      
#     )

# DISNEY BACKGROUND VIDEO
# "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2021/11/04/1636056497-disney.mp4"

# PIXAR BACKGROUND VIDEO
# "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2021/11/04/1636056639-pixar.mp4"

# MARVEL BACKGROUND VIDEO
# "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2021/11/04/1636056889-marvel.mp4"

# STAR WARS BACKGROUND VIDEO
# "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2021/11/04/1636056809-star-wars.mp4"

# NATGEO BACKGROUND VIDEO
# "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2021/11/04/1636056567-national-geographic.mp4"
