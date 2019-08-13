const lessons = [
	{ 
		title: "Урок 1", 
		description: "Базовая форма глагола",
		"exercise":[{"question":"Ты покормишь?","answer":["Will","you","feed"],"fake":[]},{"question":"Мы покормим.","answer":["We","will","feed"],"fake":[]},{"question":"Она не покормит.","answer":["She","will","not","feed"],"fake":[]},{"question":"Они кормят?","answer":["Do","they","feed"],"fake":[]},{"question":"Он кормит?","answer":["Does","he","feed"],"fake":[]},{"question":"Я кормлю.","answer":["I","feed"],"fake":[]},{"question":"Она кормит.","answer":["She","feeds"],"fake":[]},{"question":"Ты не кормишь.","answer":["You","do","not","feed"],"fake":[]},{"question":"Он не кормит.","answer":["He","does","not","feed"],"fake":[]},{"question":"Ты кормил?","answer":["Did","you","feed"],"fake":[]},{"question":"Он кормил.","answer":["He","fed"],"fake":[]},{"question":"Они не кормили.","answer":["They","did","not","feed"],"fake":[]},{"question":"Она выпьет?","answer":["Will","she","drink"],"fake":[]},{"question":"Я выпью.","answer":["I","will","drink"],"fake":[]},{"question":"Они не выпьют.","answer":["They","will","not","drink"],"fake":[]},{"question":"Ты пьешь?","answer":["Do","you","drink"],"fake":[]},{"question":"Он пьет?","answer":["Does","he","drink"],"fake":[]},{"question":"Я пью.","answer":["I","drink"],"fake":[]},{"question":"Она пьет.","answer":["She","drinks"],"fake":[]},{"question":"Я не пью.","answer":["I","do","not","drink"],"fake":[]},{"question":"Он не пьет.","answer":["He","does","not","drink"],"fake":[]},{"question":"Мы пили?","answer":["Did","we","drink"],"fake":[]},{"question":"Мы пили.","answer":["We","drank"],"fake":[]},{"question":"Ты не пил.","answer":["You","did","not","drink"],"fake":[]},{"question":"Я упаду?","answer":["Will","I","fall"],"fake":[]},{"question":"Ты упадешь.","answer":["You","will","fall"],"fake":[]},{"question":"Мы не упадем.","answer":["We","will","not","fall"],"fake":[]},{"question":"Ты падаешь?","answer":["Do","you","fall"],"fake":[]},{"question":"Она падает?","answer":["Does","she","fall"],"fake":[]},{"question":"Я падаю.","answer":["I","fall"],"fake":[]},{"question":"Он падает.","answer":["He","falls"],"fake":[]},{"question":"Они не падают.","answer":["They","do","not","fall"],"fake":[]},{"question":"Она не падает.","answer":["She","does","not","fall"],"fake":[]},{"question":"Ты упал?","answer":["Did","you","fall"],"fake":[]},{"question":"Она упала.","answer":["She","fell"],"fake":[]},{"question":"Мы не упали.","answer":["We","did","not","fall"],"fake":[]},{"question":"Ты будешь мечтать?","answer":["Will","you","dream"],"fake":[]},{"question":"Я буду мечтать.","answer":["I","will","dream"],"fake":[]},{"question":"Он не будет мечтать.","answer":["He","will","not","dream"],"fake":[]},{"question":"Ты мечтаешь?","answer":["Do","you","dream"],"fake":[]},{"question":"Она мечтает?","answer":["Does","she","dream"],"fake":[]},{"question":"Мы мечтаем.","answer":["We","dream"],"fake":[]},{"question":"Он мечтает.","answer":["He","dreams"],"fake":[]},{"question":"Они не мечтают.","answer":["They","do","not","dream"],"fake":[]},{"question":"Она не мечтает.","answer":["She","does","not","dream"],"fake":[]},{"question":"Ты мечтал?","answer":["Did","you","dream"],"fake":[]},{"question":"Она мечтала.","answer":["She","dreamt"],"fake":[]},{"question":"Они не мечтали.","answer":["They","did","not","dream"],"fake":[]},{"question":"Они приползут?","answer":["Will","they","creep"],"fake":[]},{"question":"Я приползу.","answer":["I","will","creep"],"fake":[]},{"question":"Мы не приползем.","answer":["We","will","not","creep"],"fake":[]},{"question":"Ты ползешь?","answer":["Do","you","creep"],"fake":[]},{"question":"Он ползет?","answer":["Does","he","creep"],"fake":[]},{"question":"Я ползу.","answer":["I","creep"],"fake":[]},{"question":"Она ползет.","answer":["She","creeps"],"fake":[]},{"question":"Ты не ползешь.","answer":["You","do","not","creep"],"fake":[]},{"question":"Он не ползет.","answer":["He","does","not","creep"],"fake":[]},{"question":"Ты полз?","answer":["Did","you","creep"],"fake":[]},{"question":"Мы ползли.","answer":["We","crept"],"fake":[]},{"question":"Они не ползли.","answer":["They","did","not","creep"],"fake":[]},{"question":"Ты благословишь?","answer":["Will","you","bless"],"fake":[]},{"question":"Я благословлю.","answer":["I","will","bless"],"fake":[]},{"question":"Он не благословит.","answer":["He","will","not","bless"],"fake":[]},{"question":"Ты благословляешь?","answer":["Do","you","bless"],"fake":[]},{"question":"Он благословляет?","answer":["Does","he","bless"],"fake":[]},{"question":"Они благославляют.","answer":["They","bless"],"fake":[]},{"question":"Она благословляет.","answer":["She","blesses"],"fake":[]},{"question":"Я не благословляю.","answer":["I","do","not","bless"],"fake":[]},{"question":"Он не благословляет.","answer":["He","does","not","bless"],"fake":[]},{"question":"Они благословили?","answer":["Did","they","bless"],"fake":[]},{"question":"Я благословил.","answer":["I","blessed"],"fake":[]},{"question":"Ты не благословил.","answer":["You","did","not","bless"],"fake":[]},{"question":"Они свяжу?","answer":["Will","they","bind"],"fake":[]},{"question":"Он свяжет.","answer":["He","will","bind"],"fake":[]},{"question":"Она не свяжет.","answer":["She","will","not","bind"],"fake":[]},{"question":"Ты связываешь?","answer":["Do","you","bind"],"fake":[]},{"question":"Она связывает?","answer":["Does","she","bind"],"fake":[]},{"question":"Я связываю.","answer":["I","bind"],"fake":[]},{"question":"Он связывает.","answer":["He","binds"],"fake":[]},{"question":"Я не связываю.","answer":["I","do","not","bind"],"fake":[]},{"question":"Он не связывает.","answer":["He","does","not","bind"],"fake":[]},{"question":"Ты связал?","answer":["Did","you","bind"],"fake":[]},{"question":"Мы связали.","answer":["We","bound"],"fake":[]},{"question":"Он не связал.","answer":["He","did","not","bind"],"fake":[]},{"question":"Он подумает?","answer":["Will","he","think"],"fake":[]},{"question":"Они подумают.","answer":["They","will","think"],"fake":[]},{"question":"Они не будут думать.","answer":["They","will","not","think"],"fake":[]},{"question":"Ты думаешь?","answer":["Do","you","think"],"fake":[]},{"question":"Он думает?","answer":["Does","he","think"],"fake":[]},{"question":"Я думаю.","answer":["I","think"],"fake":[]},{"question":"Она думает.","answer":["She","thinks"],"fake":[]},{"question":"Они не думают.","answer":["They","do","not","think"],"fake":[]},{"question":"Она не думает.","answer":["She","does","not","think"],"fake":[]},{"question":"Он думал?","answer":["Did","he","think"],"fake":[]},{"question":"Мы думали.","answer":["We","thought"],"fake":[]},{"question":"Они не думали.","answer":["They","did","not","think"],"fake":[]},{"question":"Ты будешь слушать?","answer":["Will","you","listen"],"fake":[]},{"question":"Она будет слушать.","answer":["She","will","listen"],"fake":[]},{"question":"Они не будут слушать.","answer":["They","will","not","listen"],"fake":[]},{"question":"Ты слушаешь?","answer":["Do","you","listen"],"fake":[]},{"question":"Она слушает?","answer":["Does","she","listen"],"fake":[]},{"question":"Я слушаю.","answer":["I","listen"],"fake":[]},{"question":"Он слушает.","answer":["He","listens"],"fake":[]},{"question":"Мы не слушаем.","answer":["We","do","not","listen"],"fake":[]},{"question":"Она не слушает.","answer":["She","does","not","listen"],"fake":[]},{"question":"Они слушали?","answer":["Did","they","listen"],"fake":[]},{"question":"Мы слушали.","answer":["We","listened"],"fake":[]},{"question":"Ты не слушал.","answer":["You","did","not","listen"],"fake":[]},{"question":"Ты прочитаешь?","answer":["Will","you","read"],"fake":[]},{"question":"Я прочитаю.","answer":["I","will","read"],"fake":[]},{"question":"Они не прочитают.","answer":["They","will","not","read"],"fake":[]},{"question":"Ты читаешь?","answer":["Do","you","read"],"fake":[]},{"question":"Она читает?","answer":["Does","she","read"],"fake":[]},{"question":"Мы читаем.","answer":["We","read"],"fake":[]},{"question":"Он читает.","answer":["He","reads"],"fake":[]},{"question":"Они не читают.","answer":["They","do","not","read"],"fake":[]},{"question":"Она не читает.","answer":["She","does","not","read"],"fake":[]},{"question":"Ты читал?","answer":["Did","you","read"],"fake":[]},{"question":"Я читал.","answer":["I","read"],"fake":[]},{"question":"Ты не читал.","answer":["You","did","not","read"],"fake":[]},{"question":"Она нарисует?","answer":["Will","she","draw"],"fake":[]},{"question":"Мы нарисуем.","answer":["We","will","draw"],"fake":[]},{"question":"Я не буду рисовать.","answer":["I","will","not","draw"],"fake":[]},{"question":"Ты рисуешь?","answer":["Do","you","draw"],"fake":[]},{"question":"Он рисует?","answer":["Does","he","draw"],"fake":[]},{"question":"Мы рисуем.","answer":["We","draw"],"fake":[]},{"question":"Она рисует.","answer":["She","draws"],"fake":[]},{"question":"Я не рисую.","answer":["I","do","not","draw"],"fake":[]},{"question":"Он не рисует.","answer":["He","does","not","draw"],"fake":[]},{"question":"Ты рисовала?","answer":["Did","you","draw"],"fake":[]},{"question":"Они нарисовали.","answer":["They","drew"],"fake":[]},{"question":"Я не рисовал.","answer":["I","did","not","draw"],"fake":[]},{"question":"Они будут делать?","answer":["Will","they","do"],"fake":[]},{"question":"Она будет делать.","answer":["She","will","do"],"fake":[]},{"question":"Мы не будем делать.","answer":["We","will","not","do"],"fake":[]},{"question":"Ты делаешь?","answer":["Do","you","do"],"fake":[]},{"question":"Она делает?","answer":["Does","she","do"],"fake":[]},{"question":"Они делают.","answer":["They","do"],"fake":[]},{"question":"Он делает.","answer":["He","does"],"fake":[]},{"question":"Я не делаю.","answer":["I","don't","do"],"fake":[]},{"question":"Он не делает.","answer":["He","doesn't","do"],"fake":[]},{"question":"Ты сделал?","answer":["Did","you","do"],"fake":[]},{"question":"Мы сделали.","answer":["We","did"],"fake":[]},{"question":"Они не сделали.","answer":["They","did","not","do"],"fake":[]},{"question":"Она выберет?","answer":["Will","she","choose"],"fake":[]},{"question":"Я выберу.","answer":["I","will","choose"],"fake":[]},{"question":"Они не выберут.","answer":["They","will","not","choose"],"fake":[]},{"question":"Он выбирает?","answer":["Does","he","choose"],"fake":[]},{"question":"Я выбираю?","answer":["Do","I","choose"],"fake":[]},{"question":"Она выбирает.","answer":["She","chooses"],"fake":[]},{"question":"Ты выбираешь.","answer":["You","сhoose"],"fake":[]},{"question":"Мы не выбираем.","answer":["We","do","not","choose"],"fake":[]},{"question":"Он не выберает.","answer":["He","does","not","choose"],"fake":[]},{"question":"Они выбрали?","answer":["Did","they","choose"],"fake":[]},{"question":"Ты выбрал.","answer":["You","chose"],"fake":[]},{"question":"Я не выбирал.","answer":["I","did","not","choose"],"fake":[]},{"question":"Ты купишь?","answer":["Will","you","buy"],"fake":[]},{"question":"Мы купим.","answer":["We","will","buy"],"fake":[]},{"question":"Я не куплю.","answer":["I","will","not","buy"],"fake":[]},{"question":"Они покупают?","answer":["Do","they","buy"],"fake":[]},{"question":"Она покупает?","answer":["Does","she","buy"],"fake":[]},{"question":"Мы покупаем.","answer":["We","buy"],"fake":[]},{"question":"Он покупает.","answer":["He","buys"],"fake":[]},{"question":"Она не покупает.","answer":["She","does","not","buy"],"fake":[]},{"question":"Я не покупаю.","answer":["I","do","not","buy"],"fake":[]},{"question":"Ты купил?","answer":["Did","you","buy"],"fake":[]},{"question":"Ты купил.","answer":["You","bought"],"fake":[]},{"question":"Они не купили.","answer":["They","did","not","buy"],"fake":[]},{"question":"Ты будешь работать?","answer":["Will","you","work"],"fake":[]},{"question":"Я буду работать.","answer":["I","will","work"],"fake":[]},{"question":"Мы не будем работать.","answer":["We","will","not","work"],"fake":[]},{"question":"Они работают?","answer":["Do","they","work"],"fake":[]},{"question":"Он работает?","answer":["Does","he","work"],"fake":[]},{"question":"Она работает","answer":["She","works"],"fake":[]},{"question":"Они работают","answer":["They","work"],"fake":[]},{"question":"Он не работает","answer":["He","does","not","work"],"fake":[]},{"question":"Я не работаю","answer":["I","do","not","work"],"fake":[]},{"question":"Ты работал?","answer":["Did","you","work"],"fake":[]},{"question":"Мы работали.","answer":["We","worked"],"fake":[]},{"question":"Он не работал.","answer":["He","did","not","work"],"fake":[]},{"question":"Ты будешь любить?","answer":["Will","you","love"],"fake":[]},{"question":"Она будет любить.","answer":["She","will","love"],"fake":[]},{"question":"Они не будут любить.","answer":["They","will","not","love"],"fake":[]},{"question":"Мы любим?","answer":["Do","we","love"],"fake":[]},{"question":"Она любит?","answer":["Does","she","love"],"fake":[]},{"question":"Он любит.","answer":["He","loves"],"fake":[]},{"question":"Ты любишь.","answer":["You","love"],"fake":[]},{"question":"Он не любит.","answer":["He","doesn't","love"],"fake":[]},{"question":"Я не люблю.","answer":["I","do","not","love"],"fake":[]},{"question":"Она любила?","answer":["Did","she","love"],"fake":[]},{"question":"Мы любили.","answer":["We","loved"],"fake":[]},{"question":"Ты не любил.","answer":["You","did","not","love"],"fake":[]},{"question":"Мы придем?","answer":["Will","we","come"],"fake":[]},{"question":"Я приду.","answer":["I","will","come"],"fake":[]},{"question":"Она не придет.","answer":["She","will","not","come"],"fake":[]},{"question":"Мы приходим?","answer":["Do","we","come"],"fake":[]},{"question":"Она приходит?","answer":["Does","she","come"],"fake":[]},{"question":"Они приходят.","answer":["They","come"],"fake":[]},{"question":"Он приходит.","answer":["He","comes"],"fake":[]},{"question":"Я не прихожу.","answer":["I","do","not","come"],"fake":[]},{"question":"Она не приходит.","answer":["She","does","not","come"],"fake":[]},{"question":"Они приходили?","answer":["Did","they","come"],"fake":[]},{"question":"Я пришел.","answer":["I","came"],"fake":[]},{"question":"Они не приходили.","answer":["They","did","not","come"],"fake":[]},{"question":"Мы построим?","answer":["Will","we","build"],"fake":[]},{"question":"Ты построишь.","answer":["You","will","build"],"fake":[]},{"question":"Они не построят.","answer":["They","will","not","build"],"fake":[]},{"question":"Ты строишь?","answer":["Do","you","build"],"fake":[]},{"question":"Он строит?","answer":["Does","he","build"],"fake":[]},{"question":"Они строят.","answer":["They","build"],"fake":[]},{"question":"Она строит.","answer":["She","builds"],"fake":[]},{"question":"Я не строю.","answer":["I","do","not","build"],"fake":[]},{"question":"Она не строит.","answer":["She","does","not","build"],"fake":[]},{"question":"Он строил?","answer":["Did","he","build"],"fake":[]},{"question":"Мы построили.","answer":["We","built"],"fake":[]},{"question":"Ты не строил.","answer":["You","did","not","build"],"fake":[]},{"question":"Ты будешь ломать?","answer":["Will","you","break"],"fake":[]},{"question":"Она будет ломать.","answer":["She","will","break"],"fake":[]},{"question":"Мы не сломаем.","answer":["We","will","not","break"],"fake":[]},{"question":"Я ломаю?","answer":["Do","I","break"],"fake":[]},{"question":"Они ломают.","answer":["They","break"],"fake":[]},{"question":"Она ломает.","answer":["She","breaks"],"fake":[]},{"question":"Я не ломаю.","answer":["I","don't","break"],"fake":[]},{"question":"Он не ломает.","answer":["He","does","not","break"],"fake":[]},{"question":"Ты сломал?","answer":["Did","you","break"],"fake":[]},{"question":"Он сломал.","answer":["He","broke"],"fake":[]},{"question":"Они не ломали.","answer":["They","did","not","break"],"fake":[]}]
	},
	{ 
		title: "Урок 2", 
		description: "Местоимения и вопросительные слова",
		"exercise":[{"question":"Я приду к тебе.","answer":["I","will","come","to","you"],"fake":[]},{"question":"Когда ты придешь ко мне?","answer":["When","will","you","come","to","me"],"fake":[]},{"question":"Когда ты поедешь в Лондон?","answer":["When","will","you","go","to","London"],"fake":[]},{"question":"Когда ты приедишь из Лондона?","answer":["When","will","you","come","from","London"],"fake":[]},{"question":"Я живу и работаю в Лондоне","answer":["I","live","and","work","in","London"],"fake":[]},{"question":"Что ты взял?","answer":["What","did","you","take"],"fake":[]},{"question":"Почему ты так думаешь?","answer":["Why","do","you","think","so"],"fake":[]},{"question":"Какая у тебя проблема?","answer":["What","problem","do","you","have"],"fake":[]},{"question":"Где ты живешь?","answer":["Where","do","you","live"],"fake":[]},{"question":"Где ты работаешь?","answer":["Where","do","you","work"],"fake":[]},{"question":"Куда она пошла?","answer":["Where","did","she","go"],"fake":[]},{"question":"Когда ты его увидишь?","answer":["When","will","you","see","him"],"fake":[]},{"question":"Как ты работаешь?","answer":["How","do","you","work"],"fake":[]},{"question":"Как она работает?","answer":["How","does","she","work"],"fake":[]},{"question":"Где ты путешествовал?","answer":["Where","did","you","travel"],"fake":[]},{"question":"Когда ты будешь путешествовать?","answer":["When","will","you","travel"],"fake":[]},{"question":"Где они путешествуют?","answer":["Where","do","they","travel"],"fake":[]},{"question":"Ты позволишь ему?","answer":["Will","you","allow","him"],"fake":[]},{"question":"Она позволит им.","answer":["She","will","allow","them"],"fake":[]},{"question":"Я не позволю тебе.","answer":["I","will","not","allow","you"],"fake":[]},{"question":"Ты позволяешь мне?","answer":["Do","you","allow","me"],"fake":[]},{"question":"Он позволяет нам?","answer":["Does","he","allow","us"],"fake":[]},{"question":"Я позволяю им.","answer":["I","allow","them"],"fake":[]},{"question":"Она позволяет ей.","answer":["She","allows","her"],"fake":[]},{"question":"Я не позволяю ей.","answer":["I","don't","allow","her"],"fake":[]},{"question":"Он не позволяет мне.","answer":["He","doesn't","allow","me"],"fake":[]},{"question":"Ты позволяешь ему?","answer":["Do","you","allow","him"],"fake":[]},{"question":"Она позволила ему.","answer":["She","allowed","him"],"fake":[]},{"question":"Я не позволял им.","answer":["I","didn't","allow","them"],"fake":[]},{"question":"Когда ты позволишь мне?","answer":["When","will","you","allow","me"],"fake":[]},{"question":"Зачем ты им позволил?","answer":["Why","did","you","allow","them"],"fake":[]},{"question":"Что она тебе позволит?","answer":["What","will","she","allow","you"],"fake":[]},{"question":"Кто тебе позволил?","answer":["Who","allowed","you"],"fake":[]},{"question":"Почему мне позволили?","answer":["Why","am","I","allowed"],"fake":[]},{"question":"Что он позволяет?","answer":["What","does","he","allow"],"fake":[]},{"question":"Почему они позволяют ей?","answer":["Why","do","they","allow","her"],"fake":[]},{"question":"Каким образом она позволила тебе?","answer":["How","did","she","allow","you"],"fake":[]},{"question":"Ты спросишь его?","answer":["Will","you","ask","him"],"fake":[]},{"question":"Они попросят тебя.","answer":["They","will","ask","you"],"fake":[]},{"question":"Она не спросит нас.","answer":["She","will","not","ask","us"],"fake":[]},{"question":"Они меня спрашивают?","answer":["Do","they","ask","me"],"fake":[]},{"question":"Она просит тебя?","answer":["Does","she","ask","you"],"fake":[]},{"question":"Я прошу тебя.","answer":["I","ask","you"],"fake":[]},{"question":"Он спрашивает у меня.","answer":["He","asks","me"],"fake":[]},{"question":"Я не спрашиваю тебя.","answer":["I","do","not","ask","you"],"fake":[]},{"question":"Он не просит ее.","answer":["He","does","not","ask","her"],"fake":[]},{"question":"Она спрашивала его?","answer":["Did","she","ask","him"],"fake":[]},{"question":"Я спрашивал тебя.","answer":["I","asked","you"],"fake":[]},{"question":"Он не спрашивал их.","answer":["He","did","not","ask","them"],"fake":[]},{"question":"Что ты спрашивала их?","answer":["What","did","you","ask","them"],"fake":[]},{"question":"Кто ее спрашивал?","answer":["Who","asked","her"],"fake":[]},{"question":"Когда ты спросил ее?","answer":["When","did","you","ask","her"],"fake":[]},{"question":"Зачем его спрашивали?","answer":["Why","was","he","asked"],"fake":[]},{"question":"Что мне спросить?","answer":["What","will","I","ask"],"fake":[]},{"question":"Почему ты спрашиваешь меня?","answer":["Why","do","you","ask","me"],"fake":[]},{"question":"Ты будешь слушать меня?","answer":["Will","you","listen","to","me"],"fake":[]},{"question":"Она будет тебя слушать.","answer":["She","will","listen","to","you"],"fake":[]},{"question":"Мы не будем слушать ее.","answer":["We","will","not","listen","to","her"],"fake":[]},{"question":"Ты слушаешь меня?","answer":["Do","you","listen","to","me"],"fake":[]},{"question":"Он слушает тебя?","answer":["Does","he","listen","to","you"],"fake":[]},{"question":"Я тебя слушаю.","answer":["I","listen","to","you"],"fake":[]},{"question":"Она слушает нас.","answer":["She","listens","to","us"],"fake":[]},{"question":"Ты меня не слушаешь.","answer":["You","do","not","listen","to","me"],"fake":[]},{"question":"Он не слушает ее.","answer":["He","does","not","listen","to","her"],"fake":[]},{"question":"Ты слушал меня?","answer":["Did","you","listen","to","me"],"fake":[]},{"question":"Она слушала их.","answer":["She","listened","to","them"],"fake":[]},{"question":"Он не слушал тебя.","answer":["He","did","not","listen","to","you"],"fake":[]},{"question":"Ты узнаешь ее?","answer":["Will","you","recognize","her"],"fake":[]},{"question":"Он узнает их.","answer":["He","will","recognize","them"],"fake":[]},{"question":"Она не узнает его.","answer":["She","will","not","recognize","him"],"fake":[]},{"question":"Они знают меня?","answer":["Do","they","know","me"],"fake":[]},{"question":"Он знает ее?","answer":["Does","he","know","her"],"fake":[]},{"question":"Я знаю тебя.","answer":["I","know","you"],"fake":[]},{"question":"Он знает его.","answer":["He","knows","him"],"fake":[]},{"question":"Ты не знаешь ее.","answer":["You","do","not","know","her"],"fake":[]},{"question":"Она его не знает.","answer":["She","doesn't","know","him"],"fake":[]},{"question":"Она знала их?","answer":["Did","she","know","them"],"fake":[]},{"question":"Я знал его.","answer":["I","knew","him"],"fake":[]},{"question":"Мы не знали ее.","answer":["We","didn't","know","her"],"fake":[]},{"question":"Ты увидишь меня?","answer":["Will","you","see","me"],"fake":[]},{"question":"Он увидит нас.","answer":["He","will","see","us"],"fake":[]},{"question":"Я не увижу ее.","answer":["I","will","not","see","her"],"fake":[]},{"question":"Ты видишь нас?","answer":["Do","you","see","us"],"fake":[]},{"question":"Она видит его?","answer":["Does","she","see","him"],"fake":[]},{"question":"Они видят его.","answer":["They","see","him"],"fake":[]},{"question":"Он видит ее.","answer":["He","sees","her"],"fake":[]},{"question":"Они не видят меня.","answer":["They","do","not","see","me"],"fake":[]},{"question":"Она не видит их.","answer":["She","does","not","see","them"],"fake":[]},{"question":"Ты видела нас?","answer":["Did","you","see","us"],"fake":[]},{"question":"Они увидели его.","answer":["They","saw","him"],"fake":[]},{"question":"Она не увидела тебя.","answer":["She","didn't","see","you"],"fake":[]}]
	},
	{ 
		title: "Урок 3", 
		description: "Глагол \"to be\", притяжательные местоимения и глаголы \"like\" и \"want\"",
		"exercise":[{"question":"Она выглядит точно как Мадонна.","answer":["She","looks","exactly","like","Madonna"],"fake":[]},{"question":"Ты действительно похожа на звезду.","answer":["You","really","look","like","a","star"],"fake":[]},{"question":"Как и его брат, он очень высокий.","answer":["Like","his","brother","he","is","very","tall"],"fake":[]},{"question":"Не смотри на меня как моя мама.","answer":["Don't","look","at","me","like","my","mother"],"fake":[]},{"question":"Как и многие люди я терпеть не могу дождь.","answer":["Like","many","people","I","hate","rain"],"fake":[]},{"question":"Мой сын как и я предпочитает сок.","answer":["My","son","is","like","me","prefers","juice"],"fake":[]},{"question":"Пицца не похожа на пирог.","answer":["Pizza","is","not","like","a","pie"],"fake":[]},{"question":"Она разговаривает как ее брат.","answer":["She","talks","like","her","brother","does"],"fake":[]},{"question":"Он похож на своего папу.","answer":["He","looks","like","his","father"],"fake":[]},{"question":"Я люблю тебя также как и мои родители.","answer":["I","love","you","like","my","parents"],"fake":[]},{"question":"Как и мои одноклассники,я пошел в кино.","answer":["Like","my","classmates","I","went","to","the","cinema"],"fake":[]},{"question":"Твой бизнес не такой как мой.","answer":["Your","business","is","not","like","mine"],"fake":[]},{"question":"Как Nokia и LG я также люблю Samsung.","answer":["Like","Nokia","and","LG","I","also","love","Samsung"],"fake":[]},{"question":"Мой муж как и мой отец - моряк.","answer":["My","husband","is","like","my","father","a","sailor"],"fake":[]},{"question":"Как и ее брат, она тоже красивая.","answer":["Like","her","brother","she","is","also","beautiful"],"fake":[]},{"question":"Как и многие другие студенты он был счастлив.","answer":["Like","many","other","students","he","was","happy"],"fake":[]},{"question":"Он похож на Деда Мороза.","answer":["He","looks","like","Father","Christmas"],"fake":[]},{"question":"Эта книга как и та очень интересная.","answer":["This","book","like","that","is","very","interesting"],"fake":[]},{"question":"Этот журнал тaкой же как и твой.","answer":["This","magazine","is","the","same","like","yours"],"fake":[]},{"question":"Я могу это сделать также как и ты.","answer":["I","can","do","it","like","you"],"fake":[]},{"question":"Он работает в качестве мененджера.","answer":["He","works","like","a","manager"],"fake":[]},{"question":"Как и ты я не хочу сейчас спать.","answer":["Like","you","I","do","not","want","to","sleep","now"],"fake":[]},{"question":"Ты прочел эту книгу как и он?","answer":["Have","you","read","this","book","like","him"],"fake":[]},{"question":"Как и у всех у него есть эмоции.","answer":["Like","everybody","he","has","emotions"],"fake":[]},{"question":"Вы не против, если я выпью кофе как и он?","answer":["Don't","you","mind","I","will","drink","coffee","like","him"],"fake":[]},{"question":"Ты носишь брюки или юбки как она?","answer":["Do","you","wear","trousers","or","skirts","like","her"],"fake":[]},{"question":"Этот желтый цвет как солнце.","answer":["This","yellow","colour","is","like","a","Sun"],"fake":[]},{"question":"Мои туфли как твои, ты видишь?","answer":["My","shoes","are","like","yours","do","you","see"],"fake":[]},{"question":"Как тебя зовут?","answer":["What","is","your","name"],"fake":[]},{"question":"Его зовут Иван.","answer":["His","name","is","Ivan"],"fake":[]},{"question":"Ее зовут Ольга.","answer":["Her","name","is","Olga"],"fake":[]},{"question":"Меня зовут Владимир.","answer":["My","name","is","Vladimir"],"fake":[]},{"question":"Он наш друг.","answer":["He","is","our","friend"],"fake":[]},{"question":"Он ее друг.","answer":["He","is","her","friend"],"fake":[]},{"question":"Это их проблема.","answer":["It","is","their","problem"],"fake":[]},{"question":"Я хочу говорить.","answer":["I","want","to","speak"],"fake":[]},{"question":"Я не хочу говорить.","answer":["I","do","not","want","to","speak"],"fake":[]},{"question":"Мне нравится танцевать с тобой.","answer":["I","like","to","dance","with","you"],"fake":[]},{"question":"Я хочу прийти к тебе.","answer":["I","want","to","come","to","you"],"fake":[]},{"question":"Я не хочу танцевать с ней.","answer":["I","don't","want","to","dance","with","her"],"fake":[]},{"question":"Ты хочешь танцевать?","answer":["Do","you","want","to","dance"],"fake":[]},{"question":"Когда ты захочешь танцевать?","answer":["When","will","you","want","to","dance"],"fake":[]},{"question":"Мы будем танцевать.","answer":["We","will","dance"],"fake":[]},{"question":"Я хочу танцевать.","answer":["I","want","to","dance"],"fake":[]},{"question":"Она не хочет говорить.","answer":["She","doesn't","want","to","speak"],"fake":[]},{"question":"Я хочу работать.","answer":["I","want","to","work"],"fake":[]},{"question":"Он не хочет работать.","answer":["He","doesn't","want","to","work"],"fake":[]},{"question":"Они хотят рисовать.","answer":["They","want","to","draw"],"fake":[]},{"question":"Ты хочешь построить?","answer":["Do","you","want","to","build"],"fake":[]},{"question":"Почему вы не хотите построить?","answer":["Why","don't","you","want","to","build"],"fake":[]},{"question":"Он не хотел строить.","answer":["He","didn't","want","to","build"],"fake":[]},{"question":"Они захотят рисовать.","answer":["They","will","want","to","draw"],"fake":[]},{"question":"Кто хочет рисовать?","answer":["Who","wants","to","draw"],"fake":[]},{"question":"Когда ты будешь там?","answer":["When","will","you","be","there"],"fake":[]},{"question":"Мы будем там.","answer":["We","will","be","there"],"fake":[]},{"question":"Меня там не будет.","answer":["I","will","not","be","there"],"fake":[]},{"question":"Они там?","answer":["Are","they","there"],"fake":[]},{"question":"Это там.","answer":["It","is","there"],"fake":[]},{"question":"Его там нет.","answer":["He","is","not","there"],"fake":[]},{"question":"Зачем ты был там?","answer":["Why","were","you","there"],"fake":[]},{"question":"Я был там.","answer":["I","was","there"],"fake":[]},{"question":"Их там не было.","answer":["They","were","not","there"],"fake":[]},{"question":"Когда ты будешь в Лондоне?","answer":["When","will","you","be","in","London"],"fake":[]},{"question":"Мы будем в Лондоне.","answer":["We","will","be","in","London"],"fake":[]},{"question":"Она не будет в Лондоне.","answer":["She","will","not","be","in","London"],"fake":[]},{"question":"Он в Лондоне?","answer":["Is","he","in","London"],"fake":[]},{"question":"Я в Лондоне.","answer":["I","am","in","London"],"fake":[]},{"question":"Тебя нет в Лондоне.","answer":["You","are","not","in","London"],"fake":[]},{"question":"Когда я был в Лондоне?","answer":["When","was","I","in","London"],"fake":[]},{"question":"Она была в Лондоне.","answer":["She","was","in","London"],"fake":[]},{"question":"Я не был в Лондоне.","answer":["I","was","not","in","London"],"fake":[]},{"question":"Ты будешь моим другом?","answer":["Will","you","be","my","friend"],"fake":[]},{"question":"Он будет твоим другом.","answer":["He","will","be","your","friend"],"fake":[]},{"question":"Я хочу быть твоим другом.","answer":["I","want","to","be","your","friend"],"fake":[]},{"question":"Я не буду твоим другом.","answer":["I","will","not","be","your","friend"],"fake":[]},{"question":"Он твой друг?","answer":["Is","he","your","friend"],"fake":[]},{"question":"Ты мой друг.","answer":["You","are","my","friend"],"fake":[]},{"question":"Они не мои друзья.","answer":["They","are","not","my","friends"],"fake":[]},{"question":"Он был моим другом?","answer":["Was","he","my","friend"],"fake":[]},{"question":"Я был их другом.","answer":["I","was","their","friend"],"fake":[]},{"question":"Мы не были его друзьями.","answer":["We","were","not","his","friends"],"fake":[]},{"question":"Ты будешь здесь?","answer":["Will","you","be","here"],"fake":[]},{"question":"Она будет здесь.","answer":["She","will","be","here"],"fake":[]},{"question":"Он не будет здесь.","answer":["He","will","not","be","here"],"fake":[]},{"question":"Меня не будет здесь.","answer":["I","will","not","be","here"],"fake":[]},{"question":"Ты здесь?","answer":["Are","you","here"],"fake":[]},{"question":"Мы здесь.","answer":["We","are","here"],"fake":[]},{"question":"Я не здесь.","answer":["I","am","not","here"],"fake":[]},{"question":"Они были здесь?","answer":["Were","they","here"],"fake":[]},{"question":"Я был здесь.","answer":["I","was","here"],"fake":[]},{"question":"Мы не были здесь.","answer":["We","were","not","here"],"fake":[]}]
	},
	{ 
		title: "Урок 4", 
		description: "Профессии. Этикет",
		"exercise":[{"question":"Я работаю в такси.","answer":["I","work","in","a","taxi"],"fake":[]},{"question":"Я работаю в музее.","answer":["I","work","in","a","museum"],"fake":[]},{"question":"Я работаю писателем.","answer":["I","work","as","a","writer"],"fake":[]},{"question":"Я писатель.","answer":["I","am","a","writer"],"fake":[]},{"question":"Я работаю водителем.","answer":["I","work","as","a","driver"],"fake":[]},{"question":"Я водитель.","answer":["I","am","a","driver"],"fake":[]},{"question":"Я актер.","answer":["I","am","an","actor"],"fake":[]},{"question":"Я работаю актером.","answer":["I","work","as","an","actor"],"fake":[]},{"question":"Приятно познакомиться.","answer":["Nice","to","meet","you"],"fake":[]},{"question":"Доброе утро.","answer":["Good","morning"],"fake":[]},{"question":"Добрый день.","answer":["Good","afternoon"],"fake":[]},{"question":"Добрый вечер.","answer":["Good","evening"],"fake":[]},{"question":"Спокойной ночи.","answer":["Good","night"],"fake":[]},{"question":"Приношу извинения.","answer":["I","am","sorry"],"fake":[]},{"question":"Ты будешь врачом.","answer":["You","will","be","a","doctor"],"fake":[]},{"question":"Я хотел стать ученым.","answer":["I","wanted","to","become","a","scientist"],"fake":[]},{"question":"Ты работаешь бизнесменом?","answer":["Do","you","work","as","a","businessman"],"fake":[]},{"question":"Я не хотел работать продавцом.","answer":["I","didn't","want","to","work","as","a","shop-assistant"],"fake":[]},{"question":"Ты не будешь работать стоматологом?","answer":["Won't","you","work","as","a","dentist"],"fake":[]},{"question":"Мой брат сильный и он телохранитель.","answer":["My","brother","is","strong","and","he","is","a","bodyguard"],"fake":[]},{"question":"Ты работал фотографом?","answer":["Did","you","work","as","a","photographer"],"fake":[]},{"question":"Мои родители - учителя работают в школе.","answer":["My","parents","are","teachers","and","work","in","the","school"],"fake":[]},{"question":"Я не работаю уборщицей.","answer":["I","don't","work","as","a","cleaner"],"fake":[]},{"question":"Она секретарь или няня?","answer":["Is","she","secretary","or","a","nurse"],"fake":[]},{"question":"Мой дядя очень хороший продюсер.","answer":["My","uncle","is","a","very","good","producer"],"fake":[]},{"question":"Ты будешь полицейским?","answer":["Will","you","be","a","policeman"],"fake":[]},{"question":"Мой лучший друг работает переводчиком.","answer":["My","best","friend","works","as","an","interpreter"],"fake":[]},{"question":"Моя мама работает официантом в баре?","answer":["Does","my","mother","works","as","a","waiter","in","the","bar"],"fake":[]},{"question":"Киркоров - лучший певец в России.","answer":["Kirkorov","is","the","best","singer","in","Russia"],"fake":[]},{"question":"Этот пекарь просто супер.","answer":["This","baker","is","super"],"fake":[]},{"question":"Почтальон приносит письма каждый день.","answer":["Postman","brings","letters","every","day"],"fake":[]},{"question":"В прошлом году я ходил к окулисту.","answer":["Last","year","I","went","to","the","oculist"],"fake":[]},{"question":"Мой брат всегда хотел быть строителем.","answer":["My","brother","always","wanted","to","be","a","builder"],"fake":[]},{"question":"Моя сестра не была хорошей моделью.","answer":["My","sister","was","not","а","good","model"],"fake":[]},{"question":"В будущем я буду дизайнером.","answer":["In","future","I","will","be","a","designer"],"fake":[]},{"question":"Грузчик - тяжелая профессия.","answer":["The","loader","is","hard","profession"],"fake":[]},{"question":"Ты знаешь много хороших актеров?","answer":["Do","you","know","many","good","artists"],"fake":[]},{"question":"Я не хороший водитель.","answer":["I","am","not","a","good","driver"],"fake":[]}]
	},
	{ 
		title: "Урок 5", 
		description: "Прилагательные. Предлоги времени",
		"exercise":[{"question":"Он старше, чем ты.","answer":["He","is","older","than","you"],"fake":[]},{"question":"Она самая красивая.","answer":["She","is","the","most","beautiful"],"fake":[]},{"question":"Сегодня она красивее, чем вчера.","answer":["Today","she","is","more","beautiful","than","yesterday"],"fake":[]},{"question":"Он самый худший.","answer":["He","is","the","worst"],"fake":[]},{"question":"Она хуже, чем они.","answer":["She","is","worse","than","they"],"fake":[]},{"question":"Лучше поздно, чем никогда.","answer":["Better","late","than","never"],"fake":[]},{"question":"Они самые лучшие.","answer":["They","are","the","best"],"fake":[]},{"question":"Это самая короткая дорога к церкви.","answer":["This","is","the","shortest","way","to","the","church"],"fake":[]},{"question":"Мой друг самый высокий.","answer":["My","friend","is","the","tallest"],"fake":[]},{"question":"Мои блины тоньше, чем твои.","answer":["My","pans","thinner","than","yours"],"fake":[]},{"question":"Это самое дорогое платье.","answer":["This","is","the","most","expensive","dress"],"fake":[]},{"question":"Я приду через 3 дня.","answer":["I","will","come","in","3","days"],"fake":[]},{"question":"Он уехал 3 дня назад.","answer":["He","went","3","days","ago"],"fake":[]},{"question":"Я увижу тебя через неделю.","answer":["I","will","see","you","in","a","week"],"fake":[]},{"question":"Я видела его 2 недели назад.","answer":["I","saw","him","2","weeks","ago"],"fake":[]},{"question":"Вчера я не работал.","answer":["Yesterday","I","did","not","work"],"fake":[]},{"question":"Сегодня я буду работать.","answer":["Today","I","will","work"],"fake":[]},{"question":"Я буду здесь завтра.","answer":["I","will","be","here","tomorrow"],"fake":[]},{"question":"Я приду в понедельник.","answer":["I","will","come","on","Monday"],"fake":[]},{"question":"Я приходил к тебе во вторник.","answer":["I","came","to","you","on","Tuesday"],"fake":[]},{"question":"Я приду в следующем месяце.","answer":["I","will","come","next","month"],"fake":[]},{"question":"Я приходил к ней на прошлой неделе.","answer":["I","came","to","her","last","week"],"fake":[]},{"question":"В следующий раз я не буду работать.","answer":["Next","time","I","will","not","work"],"fake":[]},{"question":"Мы построили в прошлый раз.","answer":["We","built","in","the","last","time"],"fake":[]},{"question":"Сегодня я говорю лучше, чем вчера.","answer":["Today","I","speak","better","than","yesterday"],"fake":[]},{"question":"Вчера я говорил хуже, чем сегодня.","answer":["Yesterday","I","spoke","worse","than","today"],"fake":[]},{"question":"Ноябрь короче, чем октябрь.","answer":["November","shorter","than","October"],"fake":[]},{"question":"Февраль самый короткий месяц.","answer":["February","is","the","shortest","month"],"fake":[]},{"question":"Москва больше, чем Киев.","answer":["Moscow","is","bigger","than","Kiev"],"fake":[]},{"question":"Я лучший строитель.","answer":["I'm","the","best","builder"],"fake":[]},{"question":"Я ходил по направлению к тому красивому дому.","answer":["I","went","towards","that","nice","house"],"fake":[]},{"question":"С тех пор он не пьет крепкий кофе.","answer":["Since","that","time","he","doesn't","drink","strong","coffee"],"fake":[]},{"question":"Через год мы пойдем в Ялту.","answer":["In","a","year","we","will","go","to","Yalta"],"fake":[]},{"question":"Он не работал на той плохой фабрике.","answer":["He","didn't","work","at","that","bad","factory"],"fake":[]},{"question":"Время от времени она просыпалась и плакала.","answer":["From","time","to","time","she","awoke","and","cried"],"fake":[]},{"question":"После моих грубых слов он ушел.","answer":["After","my","rude","words","he","went","away"],"fake":[]},{"question":"Эта маленькая кровать стоит между стулом и креслом?","answer":["Is","that","small","bed","between","the","chair","and","the","arm-chair"],"fake":[]},{"question":"Я буду любить тебя всю мою жизнь.","answer":["I","will","love","you","during","all","my","life"],"fake":[]},{"question":"Она не ездила к своей бабушке вчера.","answer":["She","didn't","go","by","her","grandmother","yesterday"],"fake":[]},{"question":"Я не уйду пока ты не придешь.","answer":["I","don't","go","away","untill","you","come"],"fake":[]},{"question":"Ты получаешь этот прекрасный подарок каждый год?","answer":["Do","you","get","this","beautiful","presents","every","year"],"fake":[]},{"question":"Эта интересная книга для тебя.","answer":["This","interesting","book","is","for","you"],"fake":[]},{"question":"Ты встал в семь часов?","answer":["Did","you","get","up","at","seven","o'clock"],"fake":[]},{"question":"День Рождения его сестры первого января.","answer":["His","sister's","birthday","is","on","the","first","of","January"],"fake":[]},{"question":"Пойдет ли она домой после школы?","answer":["Will","she","go","home","after","school"],"fake":[]}]
	},
	{ 
		title: "Урок 6", 
		description: "Слова-параметры. Употребление much и many",
		"exercise":[
			{  
			   "question":"У меня много времени.",
			   "answer":[  
				  "I",
				  "have",
				  "much",
				  "time"
			   ],
			   "fake":[]
			},
			{  
			   "question":"У нее много денег.",
			   "answer":[  
				  "She",
				  "has",
				  "much",
				  "money"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"У меня много друзей.",
			   "answer":[  
				  "I",
				  "have",
				  "many",
				  "friends"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"У меня мало времени.",
			   "answer":[  
				  "I",
				  "have",
				  "little",
				  "time"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"У него осталось мало дней.",
			   "answer":[  
				  "He",
				  "has",
				  "a",
				  "few",
				  "days"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Я хорошо отдохнул.",
			   "answer":[  
				  "I",
				  "had",
				  "good",
				  "rest"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"У нее есть время.",
			   "answer":[  
				  "She",
				  "has",
				  "time"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Все знаю это.",
			   "answer":[  
				  "Everybody",
				  "knows",
				  "it"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Он знает всех.",
			   "answer":[  
				  "He",
				  "knows",
				  "everybody"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Никто не поможет тебе.",
			   "answer":[  
				  "Nobody",
				  "will",
				  "help",
				  "you"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Кто-нибудь тебе поможет.",
			   "answer":[  
				  "Somebody",
				  "will",
				  "help",
				  "you"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Я знаю все о тебе.",
			   "answer":[  
				  "I",
				  "know",
				  "everything",
				  "about",
				  "you"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Я ничего не знаю об этом.",
			   "answer":[  
				  "I",
				  "know",
				  "nothing",
				  "about",
				  "it"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Что ты скрываешь от меня?",
			   "answer":[  
				  "What",
				  "do",
				  "you",
				  "hide",
				  "from",
				  "me"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Дай мне что-нибудь поесть.",
			   "answer":[  
				  "Give",
				  "me",
				  "something",
				  "to",
				  "eat"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Он куда-то пошел.",
			   "answer":[  
				  "He",
				  "went",
				  "somewhere"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Я никогда не делаю этого.",
			   "answer":[  
				  "I",
				  "never",
				  "do",
				  "it"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Иногда я это делаю.",
			   "answer":[  
				  "Sometimes",
				  "I",
				  "do",
				  "it"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Он всегда это делает.",
			   "answer":[  
				  "He",
				  "always",
				  "does",
				  "it"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Я так тебя люблю.",
			   "answer":[  
				  "I",
				  "love",
				  "you",
				  "so",
				  "much"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"В комнате было много стульев.",
			   "answer":[  
				  "There",
				  "were",
				  "many",
				  "chairs",
				  "in",
				  "the",
				  "room"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Многие из моих друзей - студенты.",
			   "answer":[  
				  "A",
				  "lot",
				  "of",
				  "my",
				  "friends",
				  "are",
				  "students"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Ты пьешь чай с большим количеством сахара?",
			   "answer":[  
				  "Do",
				  "you",
				  "drink",
				  "tea",
				  "with",
				  "much",
				  "sugar"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"У него в школе было много друзей?",
			   "answer":[  
				  "Did",
				  "he",
				  "have",
				  "many",
				  "friends",
				  "in",
				  "the",
				  "school"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Очень много кофе для меня.",
			   "answer":[  
				  "It's",
				  "so",
				  "much",
				  "coffee",
				  "for",
				  "me"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"У тебя будет много денег через месяц?",
			   "answer":[  
				  "Will",
				  "you",
				  "gave",
				  "much",
				  "money",
				  "in",
				  "a",
				  "month"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"У вас много музеев в городе?",
			   "answer":[  
				  "Do",
				  "you",
				  "have",
				  "a",
				  "lot",
				  "of",
				  "museums",
				  "in",
				  "your",
				  "city"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"В детском садике много детей.",
			   "answer":[  
				  "There",
				  "are",
				  "many",
				  "children",
				  "in",
				  "the",
				  "kindergarten"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Она носит много платьев?",
			   "answer":[  
				  "Does",
				  "she",
				  "wear",
				  "many",
				  "dresses"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Многие из них не были счастливы.",
			   "answer":[  
				  "Many",
				  "of",
				  "them",
				  "weren't",
				  "happy"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Он пил много сока или молока?",
			   "answer":[  
				  "Did",
				  "he",
				  "drink",
				  "much",
				  "juice",
				  "or",
				  "milk"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Многие мои слова полезны для тебя.",
			   "answer":[  
				  "A",
				  "lot",
				  "of",
				  "my",
				  "words",
				  "are",
				  "necessary",
				  "for",
				  "you"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"Я желаю тебе много счастья.",
			   "answer":[  
				  "I",
				  "wish",
				  "you",
				  "much",
				  "happiness"
			   ],
			   "fake":[  
		 
			   ]
			},
			{  
			   "question":"У тебя будет много рабочих на фабрике?",
			   "answer":[  
				  "Will",
				  "you",
				  "have",
				  "many",
				  "workers",
				  "in",
				  "your",
				  "factory"
			   ],
			   "fake":[  
		 
			   ]
			}
		 ]
	},
	{ 
		title: "Урок 7", 
		description: "Причастия",
		"exercise":[{"question":"Я постараюсь помочь тебе.","answer":["I","will","try","to","help","you"],"fake":[]},{"question":"Я не буду помогать тебе.","answer":["I","will","not","help","you"],"fake":[]},{"question":"Зачем ты просишь меня помочь тебе?","answer":["Why","are","you","asking","me","to","help","you"],"fake":[]},{"question":"Кто помог тебе сделать это?","answer":["Who","helped","you","do","that"],"fake":[]},{"question":"Где ты купил эту рубашку?","answer":["Where","did","you","buy","this","shirt"],"fake":[]},{"question":"Вы будете платить наличными или кредиткой?","answer":["Will","you","pay","cash","or","credit","card"],"fake":[]},{"question":"Я не играл в этом фильме.","answer":["I","did","not","play","in","this","film"],"fake":[]},{"question":"Я хочу переодеться.","answer":["I","want","to","change"],"fake":[]},{"question":"Я хочу купить новую машину.","answer":["I","want","to","buy","a","new","car"],"fake":[]},{"question":"Не иди с ними.","answer":["Do","not","go","with","them"],"fake":[]}]
	},
	{ 
		title: "Урок 8", 
		description: "There is / There are",
		"exercise":[{"question":"Я от тебя далеко.","answer":["I","far","from","you"],"fake":[]},{"question":"Еда на столе.","answer":["Food","on","the","table"],"fake":[]},{"question":"Он стучал по столу.","answer":["He","knocked","on","the","table"],"fake":[]},{"question":"Дети в школе.","answer":["Children","at","school"],"fake":[]},{"question":"Вчера я был дома.","answer":["Yesterday","I","was","at","home"],"fake":[]},{"question":"Я буду в этой комнате.","answer":["I","will","be","in","this","room"],"fake":[]},{"question":"Встретимся в 3 часа.","answer":["I","will","meet","you","at","3","o'clock"],"fake":[]},{"question":"Между мной и тобой.","answer":["Between","you","and","me"],"fake":[]},{"question":"Это останется между нами.","answer":["This","is","just","between","us"],"fake":[]},{"question":"Я пойду без тебя.","answer":["I","will","go","without","you"],"fake":[]},{"question":"Он придет с другом.","answer":["He","will","come","with","a","friend"],"fake":[]},{"question":"Чай с сахаром.","answer":["Tea","with","sugar"],"fake":[]},{"question":"Я делаю это для тебя.","answer":["I","do","it","for","you"],"fake":[]},{"question":"Сделай это для меня.","answer":["Do","it","for","me"],"fake":[]},{"question":"Расскажи мне о своем отце.","answer":["Tell","me","about","your","father"],"fake":[]},{"question":"Я думаю о тебе.","answer":["I","think","about","you"],"fake":[]},{"question":"Подумай об этом.","answer":["Think","about","it"],"fake":[]},{"question":"Ей около 20 лет.","answer":["She","was","about","20","years"],"fake":[]},{"question":"Около 3 минут.","answer":["About","3","minutes"],"fake":[]},{"question":"Поднимись в мою комнату.","answer":["Go","up","to","my","room"],"fake":[]},{"question":"Мы спустились в подвал.","answer":["We","went","down","to","the","basement"],"fake":[]},{"question":"Спустись ко мне.","answer":["Go","down","to","me"],"fake":[]},{"question":"Я вернусь к тебе.","answer":["I","will","get","back","to","you"],"fake":[]},{"question":"Отойди с дороги.","answer":["Go","away","from","the","road"],"fake":[]},{"question":"Завтра мы к тебе зайдем.","answer":["Tomorrow","we","will","go","to","you"],"fake":[]},{"question":"Сегодня я не выйду.","answer":["Today","I","will","not","go","out"],"fake":[]},{"question":"Если ты оглянешься...","answer":["If","you","look","back"],"fake":[]},{"question":"Посмотри вверх.","answer":["Look","up"],"fake":[]},{"question":"Не отворачивайся от меня.","answer":["Do","not","look","away","from","me"],"fake":[]},{"question":"Вчера она выглянула в окно.","answer":["Yesterday","she","looked","out","the","window"],"fake":[]},{"question":"Я отделался от нее.","answer":["I","get","away","from","her"],"fake":[]}]
	},
	{ 
		title: "Урок 9", 
		description: "Предлоги",
		"exercise":[{"question":"У тебя есть вопросы к нему?","answer":["Do","you","have","any","questions","for","him"],"fake":[]},{"question":"Вчера я разговаривал с ними.","answer":["Yesterday","I","talked","to","them"],"fake":[]},{"question":"Ты должен забыть обо мне.","answer":["You","must","forget","about","me"],"fake":[]},{"question":"Я хочу рассказать тебе интересную историю.","answer":["I","want","to","tell","you","an","interesting","story"],"fake":[]},{"question":"Как ты получил эту роль?","answer":["How","did","you","get","the","role"],"fake":[]},{"question":"Я буду рад видеть тебя.","answer":["I","will","be","glad","to","see","you"],"fake":[]},{"question":"Я доволен чем-то.","answer":["I","am","happy","with","something"],"fake":[]},{"question":"Я сам сделаю это.","answer":["I","will","do","it","myself"],"fake":[]},{"question":"Сделай это сам.","answer":["Do","it","yourself"],"fake":[]},{"question":"Он доволен сам собой.","answer":["He","is","happy","with","himself"],"fake":[]},{"question":"Мы сделаем это сами.","answer":["We","will","do","it","ourselves"],"fake":[]},{"question":"Они делают это сами.","answer":["They","do","it","themselves"],"fake":[]},{"question":"Я буду краток.","answer":["I","will","be","short"],"fake":[]},{"question":"К счастью была хорошая погода.","answer":["Fortunately","the","weather","was","good"],"fake":[]},{"question":"К сожалению я опоздал.","answer":["Unfortunately","I","am","late"],"fake":[]},{"question":"После этого все ушли.","answer":["After","that","all","gone"],"fake":[]},{"question":"Это моя первая попытка.","answer":["This","is","my","first","try"],"fake":[]},{"question":"Я ем очень часто.","answer":["I","eat","very","often"],"fake":[]},{"question":"Она редко ходит в спортзал.","answer":["She","seldom","goes","to","the","gym"],"fake":[]},{"question":"Обычно все заканчивается хорошо.","answer":["Usually","all","ends","well"],"fake":[]},{"question":"Я играю эту роль.","answer":["I","play","this","role"],"fake":[]},{"question":"Я выиграл.","answer":["I","won"],"fake":[]},{"question":"Я выиграю эту игру.","answer":["I","will","win","this","game"],"fake":[]},{"question":"Ты проиграешь мне.","answer":["You","will","lose","me"],"fake":[]},{"question":"Он проиграл.","answer":["He","lost"],"fake":[]},{"question":"Я не понимаю, как ты сделал это.","answer":["I","don't","know","how","you","did","it"],"fake":[]},{"question":"Ты похожа на него.","answer":["You","look","like","him"],"fake":[]},{"question":"Мы проведем время вместе.","answer":["We","will","spend","time","together"],"fake":[]},{"question":"Мы раньше не встречались.","answer":["We","never","met","before"],"fake":[]}]
	},
	{ 
		title: "Урок 10", 
		description: "Фразовые глаголы",
		"exercise":[{"question":"На этот раз я прав.","answer":["This","time","I","am","right"],"fake":[]},{"question":"У меня будет время отдохнуть.","answer":["I","will","have","time","to","relax"],"fake":[]},{"question":"Что с тобой произошло?","answer":["What","happened","to","you"],"fake":[]},{"question":"В чем разница между ними?","answer":["What","is","the","difference","between","them"],"fake":[]},{"question":"Он был благодарен мне.","answer":["He","was","grateful","to","me"],"fake":[]},{"question":"Это с тобой произойдет.","answer":["It","happens","to","you"],"fake":[]},{"question":"Как ты себя чувствуешь?","answer":["How","do","you","feel"],"fake":[]},{"question":"Это большое событие в моей жизни.","answer":["This","is","a","big","event","in","my","life"],"fake":[]},{"question":"Она такая же мудрая как они.","answer":["She","is","as","wise","as","them"],"fake":[]},{"question":"Поддержи меня сейчас.","answer":["Support","me","now"],"fake":[]},{"question":"На мне модная одежда.","answer":["Fashion","clothes","on","me"],"fake":[]},{"question":"Эти изделия для продажи.","answer":["These","items","for","sale"],"fake":[]},{"question":"Прими мой заказ.","answer":["Take","my","order"],"fake":[]}]
	},
	{ 
		title: "Урок 11", 
		description: "Модальные глаголы can, must",
		"exercise":[{"question":"Я любил.","answer":["I","have","loved"],"fake":[]},{"question":"Я боюсь.","answer":["I","am","afraid"],"fake":[]},{"question":"Я не боюсь.","answer":["I","am","not","afraid"],"fake":[]},{"question":"Ты боишься?","answer":["Are","you","afraid"],"fake":[]},{"question":"Почему ты боишься?","answer":["Why","are","you","afraid"],"fake":[]},{"question":"Вчера было холодно.","answer":["Yesterday","it","was","cold"],"fake":[]},{"question":"Здесь очень душно.","answer":["It","is","so","stuffy","here"],"fake":[]},{"question":"Ты в порядке?","answer":["Are","you","ok"],"fake":[]},{"question":"Ты голоден?","answer":["Are","you","hungry"],"fake":[]},{"question":"Ты сердишься?","answer":["Are","you","angry"],"fake":[]},{"question":"Ты счастлив?","answer":["Are","you","happy"],"fake":[]},{"question":"До завтрака я был голоден.","answer":["I","was","hungry","before","breakfast"],"fake":[]},{"question":"После завтрака я ничего не боюсь.","answer":["After","breakfast","I","am","afraid","of","nothing"],"fake":[]},{"question":"Я не боюсь ничего.","answer":["I","am","afraid","of","nothing"],"fake":[]},{"question":"Я устал от всего.","answer":["I","am","tired","of","everything"],"fake":[]}]
	},
	{ 
		title: "Урок 12", 
		description: "Continuous",
		"exercise":[{"question":"Остановиться в гостиннице.","answer":["To","stay","in","a","hotel"],"fake":[]},{"question":"Остановиться у друзей.","answer":["To","stay","with","friends"],"fake":[]},{"question":"Есть в ресторане.","answer":["To","eat","in","a","resturant"],"fake":[]},{"question":"Этого достаточно.","answer":["It","is","enough"],"fake":[]},{"question":"Тебе нужно пойти туда.","answer":["You","need","to","go","there"],"fake":[]},{"question":"Мне нужна твоя помощь.","answer":["I","need","your","help"],"fake":[]},{"question":"Хватит, значит хватит.","answer":["Enough","is","enough"],"fake":[]},{"question":"Я не разговариваю с незнакомцами.","answer":["I","don't","talk","to","strangers"],"fake":[]},{"question":"Это странно.","answer":["It","is","strange"],"fake":[]},{"question":"Четвертое июля.","answer":["The","fourth","of","July"],"fake":[]},{"question":"Мой день рождения третьего декабря.","answer":["My","birthday","is","on","the","third","of","December"],"fake":[]},{"question":"Они ровесники.","answer":["They","are","of","the","same","age"],"fake":[]},{"question":"Все равно.","answer":["It","is","all","the","same"],"fake":[]}]
	},
	{ 
		title: "Урок 13", 
		description: "Прилагательные. Описание людей. Погода",
		"exercise":[{"question":"Я хочу, чтобы ты пошел.","answer":["I","want","you","to","go"],"fake":[]},{"question":"Позволь ему пойти.","answer":["Let","him","go"],"fake":[]},{"question":"Не говори с ним.","answer":["Don't","speak","with","him"],"fake":[]},{"question":"Давай поговорим об этом.","answer":["Let's","speak","about","it"],"fake":[]},{"question":"Не говори с ним об этом.","answer":["Don't","speak","about","it","with","him"],"fake":[]},{"question":"Куда она пошла?","answer":["Where","did","she","go"],"fake":[]},{"question":"Она пошла танцевать.","answer":["She","went","to","dance"],"fake":[]},{"question":"Пусть она расскажет тебе все.","answer":["Let","her","tell","me","everything"],"fake":[]},{"question":"Давайте обсудим нашу работу.","answer":["Let's","discuss","our","work"],"fake":[]},{"question":"Позволь ему помочь мне.","answer":["Let","him","help","me"],"fake":[]},{"question":"Не ходи туда сегодня.","answer":["Don't","go","there","today"],"fake":[]},{"question":"Можно я закурю?","answer":["Can","I","smoke"],"fake":[]},{"question":"Можно я выйду?","answer":["Can","I","go","out"],"fake":[]},{"question":"Можно я поговорю с тобой?","answer":["Can","I","speak","with","you"],"fake":[]},{"question":"Это можно сделать.","answer":["One","can","do","it"],"fake":[]},{"question":"Этого нельзя сделать.","answer":["One","can't","do","it"],"fake":[]},{"question":"Кто-то может сделать это.","answer":["Somebody","can","do","it"],"fake":[]},{"question":"Надо ли мне идти?","answer":["Should","I","go"],"fake":[]},{"question":"Стоит ли это делать?","answer":["Should","I","do","it"],"fake":[]},{"question":"Надо всегда помнить.","answer":["One","should","always","remember"],"fake":[]},{"question":"Я думаю тебе надо поговорить с ним.","answer":["I","think","you","should","talk","to","him"],"fake":[]},{"question":"Можно тебе позвонить?","answer":["Can","I","call","you"],"fake":[]},{"question":"Должен ли я тебе позвонить?","answer":["Should","I","call","you"],"fake":[]},{"question":"Я не знаю нужно ли мне идти.","answer":["I","don't","know","if","I","should","go"],"fake":[]},{"question":"Здесь нельзя курить.","answer":["One","can't","smoke","here"],"fake":[]},{"question":"Мы не должны думать об этом.","answer":["We","shouldn't","think","about","it"],"fake":[]},{"question":"Ты не должен так говорить.","answer":["You","shouldn't","talk","like","that"],"fake":[]},{"question":"Никто не может так говорить.","answer":["One","shouldn't","talk","like","that"],"fake":[]},{"question":"Я не знаю можно ли говорить с ним об этом.","answer":["I","don't","know","if","I","should","speak","about","it","with","him"],"fake":[]},{"question":"Можно ли помочь тебе?","answer":["Should","I","help","you"],"fake":[]},{"question":"Мы не можем делать этого сейчас.","answer":["We","can't","do","it","now"],"fake":[]},{"question":"Скажите мне.","answer":["Tell","me"],"fake":[]}]
	},
	{ 
		title: "Урок 14", 
		description: "Present Perfect",
		"exercise":[{"question":"Мне позвонили.","answer":["I","got","a","coll"],"fake":[]},{"question":"Мне позвонил Олег.","answer":["I","got","a","call","to","Oleg"],"fake":[]},{"question":"Я перезвоню позже.","answer":["I","will","call","back","later"],"fake":[]},{"question":"Могу ли я оставить сообщение?","answer":["Can","I","leave","a","message"],"fake":[]},{"question":"Когда я могу тебе позвонить?","answer":["When","can","I","call","you"],"fake":[]},{"question":"Он не перезвонил.","answer":["He","didn't","call","back"],"fake":[]},{"question":"Я позвонил ему, но он не перезвонил.","answer":["I","called","him","but","he","didn't","call","back"],"fake":[]},{"question":"Олег позвонил тебе, но он не оставил сообдения.","answer":["Oleg","called","you","but","he","didn't","leave","a","message"],"fake":[]},{"question":"Кто-нибудь звонил мне?","answer":["Did","somebody","call","me"],"fake":[]},{"question":"Если кто-нибудь позвонит мне, прими сообщение.","answer":["If","somebody","calls","me","take","a","message"],"fake":[]},{"question":"Если ты пойдешь, возьми меня с собой.","answer":["If","you","go","take","me","with","you"],"fake":[]},{"question":"Когда ты уйдешь, я буду скучать.","answer":["When","you","go","away","I","will","miss"],"fake":[]},{"question":"Если ты придешь, я буду плакать.","answer":["If","you","come","I","will","cry"],"fake":[]},{"question":"Каждый день мне звонит режисер.","answer":["Every","day","I","get","a","call","from","a","film","director"],"fake":[]},{"question":"Кто послал это письмо?","answer":["Who","sent","this","letter"],"fake":[]},{"question":"Кто видел тебя?","answer":["Who","saw","you"],"fake":[]},{"question":"Кого ты видел?","answer":["Who","did","you","see"],"fake":[]},{"question":"Что ты сделал?","answer":["What","did","you","do"],"fake":[]},{"question":"Что ты слышал?","answer":["What","did","you","hear"],"fake":[]},{"question":"Кто слышал об этом?","answer":["Who","heard","about","it"],"fake":[]},{"question":"Кого ты любишь?","answer":["Who","do","you","love"],"fake":[]},{"question":"Кто любит тебя?","answer":["Who","loves","you"],"fake":[]},{"question":"Спроси что-нибудь полегче.","answer":["Ask","me","another"],"fake":[]},{"question":"Кто хочет выпить?","answer":["Who","wants","to","drink"],"fake":[]},{"question":"Что ты видел?","answer":["What","did","you","see"],"fake":[]},{"question":"Кто видел это?","answer":["Who","saw","this"],"fake":[]},{"question":"Кто понимает тебя?","answer":["Who","understands","you"],"fake":[]},{"question":"Кого ты понимаешь?","answer":["Who","do","you","understand"],"fake":[]},{"question":"Кто был здесь?","answer":["Who","was","here"],"fake":[]},{"question":"Кого ты видел здесь?","answer":["Who","did","you","see","here"],"fake":[]},{"question":"Кто послал тебя сюда?","answer":["Who","sent","you","here"],"fake":[]},{"question":"Кого ты послал туда?","answer":["Who","did","you","send","there"],"fake":[]},{"question":"Кто звонил тебе?","answer":["Who","called","you"],"fake":[]},{"question":"Кому ты звонил?","answer":["Who","did","you","call"],"fake":[]},{"question":"Кому ты звонишь?","answer":["Who","do","you","call"],"fake":[]}]
	},
	{ 
		title: "Урок 15", 
		description: "Повелительное наклонение",
		"exercise":[{"question":"Кто-то может сделать (это можно сделать).","answer":["One","can","do","it"],"fake":[]},{"question":"Это нельзя сделать.","answer":["One","cannot","do","it"],"fake":[]},{"question":"Кое-кто может сделать это.","answer":["Somebody","can","do","it"],"fake":[]},{"question":"Надо всегда помнить.","answer":["One","should","always","remember"],"fake":[]},{"question":"Он пришел чтобы поговорить.","answer":["He","came","to","speak"],"fake":[]},{"question":"Могу ли я тебе позвонить?","answer":["Can","I","call","you"],"fake":[]},{"question":"Я не знаю надо ли мне идти.","answer":["I","don't","know","if","I","should","go"],"fake":[]},{"question":"Здесь нельзя курить.","answer":["One","can't","smoke","here"],"fake":[]},{"question":"Мы не должны думать об этом.","answer":["We","shouldn't","think","about","it"],"fake":[]},{"question":"Мы не можем сделать это сейчас.","answer":["We","can't","do","it","now"],"fake":[]},{"question":"Если ты мне поможешь...","answer":["If","you","help","me"],"fake":[]},{"question":"Если ты поможешь мне, то будешь моим другом.","answer":["If","you","help","me","you","will","be","my","friend"],"fake":[]},{"question":"Я пришел поговорить с тобой.","answer":["I","come","talk","you"],"fake":[]},{"question":"Куда они пригласят нас сходить?","answer":["Where","will","they","invite","us","to","go"],"fake":[]},{"question":"Когда мы сможем поговорить об этом?","answer":["When","we","will","talk","about","it"],"fake":[]},{"question":"Ты работаешь завтра?","answer":["Will","you","work","tomorrow"],"fake":[]},{"question":"Она не хочет говорить со мной об этом.","answer":["She","doesn't","want","to","talk","to","me","about","it"],"fake":[]},{"question":"Куда ты пойдешь завтра?","answer":["Where","will","you","go","tomorrow"],"fake":[]},{"question":"Куда ты вчера ходил?","answer":["Where","did","you","go","yesterday"],"fake":[]}]
	},
	{ 
		title: "Урок 16", 
		description: "Фразовые глаголы",
		"exercise":[{"question":"Он любит.","answer":["He","loves"],"fake":[]},{"question":"Он любим.","answer":["He","is","loved"],"fake":[]},{"question":"Он видит.","answer":["He","sees"],"fake":[]},{"question":"Его видят.","answer":["He","is","seen"],"fake":[]},{"question":"Он построил дом.","answer":["He","built","the","house"],"fake":[]},{"question":"Дом был построен.","answer":["The","house","was","built"],"fake":[]},{"question":"Он сделал это.","answer":["He","did","it"],"fake":[]},{"question":"Это было сделано.","answer":["It","was","done"],"fake":[]},{"question":"Он построит дом.","answer":["He","will","be","build","the","house"],"fake":[]},{"question":"Дом будет построен.","answer":["The","house","will","be","built"],"fake":[]},{"question":"Я побывал.","answer":["I","have","been"],"fake":[]},{"question":"Ты не видешь его, но он видит тебя.","answer":["You","don't","see","him","but","he","sees","you"],"fake":[]},{"question":"Ты хочешь обсудить этот вопрос?","answer":["Did","you","discuss","this","question"],"fake":[]},{"question":"Тебе предстоит обсудить этот вопрос завтра.","answer":["You","will","discuss","this","question","tomorrow"],"fake":[]}]
	},
	{
		title: "test",
		description: 'test',
		exercise: [
			{
				question: "Привет",
				answer: ["Hello"],
				fake: ["fake"]
			}
		]
	}
];

export default lessons;