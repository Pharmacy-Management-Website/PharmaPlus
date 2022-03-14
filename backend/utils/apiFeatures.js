class ApiFeatures {

	constructor(query, queryStr) {
		this.query = query;
		this.queryStr = queryStr;
	}

	search() {
		const keyword = this.queryStr.keyword
			? {
				name: {
					$regex: this.queryStr.keyword,
					$options: "i",
				},
			}
			: {};
		this.query = this.query.find({ ...keyword });
		return this;
	}

	shopByBrand() {
		const brand = this.queryStr.brand
			? {
				categoryOne: {
					$regex: this.queryStr.brand,
					$options: "i",
				},
			}
			: {};
		this.query = this.query.find({ ...brand });
		return this;
	}

	shopByHealth() {
		const health = this.queryStr.health
			? {
				categoryTwo: {
					$regex: this.queryStr.health,
					$options: "i",
				},
			}
			: {};
		this.query = this.query.find({ ...health });
		return this;
	}

	pagination(resultPerPage) {
		const currentPage = Number(this.queryStr.page) || 1;
		const skip = resultPerPage * (currentPage - 1);
		this.query = this.query.limit(resultPerPage).skip(skip);
		return this;
	}

};

module.exports = ApiFeatures;
