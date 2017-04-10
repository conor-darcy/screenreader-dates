var elements = document.querySelectorAll('time[datetime]');

	elements.forEach(function (element) {
	  applyLabel(element);
	});
	
	function applyLabel(element){
		var datetime = new Date(element.getAttribute('datetime')),
		year = datetime.getFullYear(),
		month = datetime.getMonth(),
		day = datetime.getDate(),
		weekday = datetime.getDay(),
		readableMonth,
		readableDay,
		readableWeekday;

		console.log(datetime);
		convertMonth(month);
		convertDay(day);
		convertWeekday(weekday);
		element.setAttribute('aria-label', readableWeekday + ', ' + readableMonth + ' ' + readableDay + ', ' + year + '.');


		function convertMonth(m){
			var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			readableMonth = months[m];
		}

		function convertDay(d){
			var days = ['Zero','First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eight', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth','Seventeenth','Eighteenth','Nineteenth','Twentieth','Twenty-first','Twenty-second','Twenty-third','Twenty-fourth','Twenty-fifth','Twenty-sixth','Twenty-seventh','Twenty-eight','Twenty-ninth','Thirtieth','Thirty-first'];
			readableDay = days[d];
		}

		function convertWeekday(w){
			var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			readableWeekday = weekdays[w];
		}
	}