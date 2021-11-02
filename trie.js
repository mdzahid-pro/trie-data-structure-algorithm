function makeNode(ch){
	this.ch = ch
	this.isTarminal = false
	this.map = {}
	this.word = []
}

function add(str, i, root){
	if(i === str.length){
		root.isTarminal = true
		return ;
	}
	
	if(!root.map[str[i]]){
		root.map[str[i]] = new makeNode(str[i])
	}
	
	root.word.push(str)
	add(str,i+1,root.map[str[i]])
}

function search(str, i, root){
	if(i === str.length)
		return root.word;
	
	if(!root.map[str[i]])
		return ;
	return search(str , i+1,root.map[str[i]])
}