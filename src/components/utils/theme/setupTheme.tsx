export default function setTheme(darkMode: boolean) {
	if (!darkMode) {
		document.documentElement.style.setProperty(
			'--background-primary',
			'#000000'
		);
		document.documentElement.style.setProperty(
			'--background-secondary',
			'#252323'
		);
		document.documentElement.style.setProperty('--text-primary', '#f5fbef');
		document.documentElement.style.setProperty(
			'--text-secondary',
			'#929fad'
		);
		document.documentElement.style.setProperty('--emphasis', '#006989');
	} else {
		document.documentElement.style.setProperty(
			'--background-primary',
			'#FEFEFF'
		);
		document.documentElement.style.setProperty(
			'--background-secondary',
			'#ADC6DD'
		);
		document.documentElement.style.setProperty('--text-primary', '#000000');
		document.documentElement.style.setProperty(
			'--text-secondary',
			'#252323'
		);
		document.documentElement.style.setProperty('--emphasis', '#006989');
		const fullButtonElements = document.querySelectorAll('.button-full');
    fullButtonElements.forEach((el) => {
      el?.classList.add('dark-mode');
    })
    const catalogTitles = document.querySelectorAll('.catalog-title');
    catalogTitles.forEach((el) => {
		el?.classList.add('dark-mode');
	});
	}
}
