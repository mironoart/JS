/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function(tweet) {
	let arr = tweet
		.split(' ')
		.filter(getArrOfWords)
		.map(removeHashTags)

	function getArrOfWords(item) {
		if (item[0] === '#') return true
	}
	function removeHashTags(item) {
		return item.slice(1)
	}

	return arr
}
