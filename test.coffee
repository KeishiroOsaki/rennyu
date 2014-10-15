rangeRnd = (min,max) ->

	rnd = Math.floor(Math.random()*max) 
	rnd = rnd 
#	console.log rnd
	rnd

main = ->
	arr=[0]
	for i in [0..16]
		# ...
		arr.push(0)
	
#	arr[]
	for i in [0..1000]
		#str = rangeRnd(0,16)
		sw = rangeRnd(0,16)
		arr[sw] +=1

	for i in [0..16]
		# ...
		console.log  i + ":" + arr[i]
	
#	console.log str

main()