/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function(hashtags) {
	if (hashtags.length === 0) return ""

	let arr = []

	hashtags.forEach(function(word) {
		let lowerCasedWord = word.toLowerCase()
		if (!arr.hasOwnProperty(lowerCasedWord)) {
			arr[lowerCasedWord] = lowerCasedWord
		}
	})

	return Object.keys(arr).join(", ")
}
