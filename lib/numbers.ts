type HebrewNumbers = {
	[number: string]: { m: string; f: string };
  };

export function getRandomNumber(max: number) {
	return Math.floor(Math.random() * max) + 1;
  }

const hebrewNumbers:HebrewNumbers = {
	1: { m: "אחד", f: "אחת" },
	2: { m: "שניים", f: "שתיים" },
	3: { m: "שלושה", f: "שלוש" },
	4: { m: "ארבעה", f: "ארבע" },
	5: { m: "חמישה", f: "חמש" },
	6: { m: "שישה", f: "שש" },
	7: { m: "שבעה", f: "שבע" },
	9: { m: "תשעה", f: "תשע" },
	11: { m: "אחד עשר", f: "אחת עשרה" },
	12: { m: "שנים עשר", f: "שתיים עשרה" },
	13: { m: "שלושה עשר", f: "שלוש עשרה" },
	14: { m: "ארבעה עשר", f: "ארבע עשרה" },
	15: { m: "חמישה עשר", f: "חמש עשרה" },
	16: { m: "שישה עשר", f: "שש עשרה" },
	17: { m: "שבעה עשר", f: "שבע עשרה" },
	19: { m: "תשעה עשר", f: "תשע עשרה" },
	21: { m: "עשרים ואחד", f: "עשרים ואחת" },
	22: { m: "עשרים ושניים", f: "עשרים ושתיים" },
	23: { m: "עשרים ושלושה", f: "עשרים ושלוש" },
	24: { m: "עשרים וארבעה", f: "עשרים וארבע" },
	25: { m: "עשרים וחמישה", f: "עשרים וחמש" },
	26: { m: "עשרים ושישה", f: "עשרים ושש" },
	27: { m: "עשרים ושבעה", f: "עשרים ושבע" },
	29: { m: "עשרים ותשעה", f: "עשרים ותשע" },
	31: { m: "שלושים ואחד", f: "שלושים ואחת" },
	32: { m: "שלושים ושניים", f: "שלושים ושתיים" },
	33: { m: "שלושים ושלושה", f: "שלושים ושלוש" },
	34: { m: "שלושים וארבעה", f: "שלושים וארבע" },
	35: { m: "שלושים וחמישה", f: "שלושים וחמש" },
	36: { m: "שלושים ושישה", f: "שלושים ושש" },
	37: { m: "שלושים ושבעה", f: "שלושים ושבע" },
	39: { m: "שלושים ותשעה", f: "שלושים ותשע" },
	41: { m: "ארבעים ואחד", f: "ארבעים ואחת" },
	42: { m: "ארבעים ושניים", f: "ארבעים ושתיים" },
	43: { m: "ארבעים ושלושה", f: "ארבעים ושלוש" },
	44: { m: "ארבעים וארבעה", f: "ארבעים וארבע" },
	45: { m: "ארבעים וחמישה", f: "ארבעים וחמש" },
	46: { m: "ארבעים ושישה", f: "ארבעים ושש" },
	47: { m: "ארבעים ושבעה", f: "ארבעים ושבע" },
	49: { m: "ארבעים ותשעה", f: "ארבעים ותשע" },
	51: { m: "חמישים ואחד", f: "חמישים ואחת" },
	52: { m: "חמישים ושניים", f: "חמישים ושתיים" },
	53: { m: "חמישים ושלושה", f: "חמישים ושלוש" },
	54: { m: "חמישים וארבעה", f: "חמישים וארבע" },
	55: { m: "חמישים וחמישה", f: "חמישים וחמש" },
	56: { m: "חמישים ושישה", f: "חמישים ושש" },
	57: { m: "חמישים ושבעה", f: "חמישים ושבע" },
	59: { m: "חמישים ותשעה", f: "חמישים ותשע" },
};


export { hebrewNumbers }  
export type {HebrewNumbers}