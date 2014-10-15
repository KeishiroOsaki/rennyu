bot = ->
	str = dbase()
	document.write str
	console.log str


dbase = ->
	arr = ["進捗どうですか" , "つらい" , "ゲムー" , "(◞‸◟)" , "くコ:彡" , "もうねよう","MGTたのしそう","rennyu.coffee","すやすや","σ(o'v'o)まとも"]
	console.log "dbase"

	for key, elm in arr
		i=i+1

	i=i-1
	i=10
	res = arr[rangeRnd(0,i)]
#	res = arr[Math.random()*10]
#	res = arr[1]

	console.log res
	res

	

rangeRnd = (min,max) ->
	
	rnd = Math.floor(Math.random()*max) 
	rnd = rnd 
	console.log rnd
	rnd

bot();