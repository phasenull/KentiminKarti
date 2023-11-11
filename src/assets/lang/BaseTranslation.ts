export default interface BaseTranslation {
	language: string,
	language_locale: string,
	language_locale_code: string,
	account: string,
	show: string,
	settings: string,
	about: string,
	home: string,
	contact: string,
	login: string,
	signup: string,
	logout: string,
	username: string,
	password: string,
	confirm_password: string,
	email: string,
	search: string,
	searching: string,
	searchingFor: ({searching_for}:{searching_for?:string})=>string,
	searchResults: string,
	loading: string,
	loadingFor: ({loading_for}:{loading_for?:string})=>string,
	loadingResults: string,
	please_wait: string,
	signup_instead: string,
	login_instead: string,
	info: string,
	ok: string,
	routes: string,
	map: string,
	basic_info: string,
	selected_region: ({region}:{region:string})=>string,
	go_to_title_screen: string,
	visuals: string,
	danger_zone: string,
	remove: string,
	route: string,
	select_region: string,
	showing_of({showing,total}:{showing?:number,total:number}):string,
}