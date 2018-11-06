export const USER: any = { data : {}};
export const STORAGE: any = { tenantId : ''};

export const language = {
	'en_US' : 'en',
	'fr_FR' : 'en',
};

export const languageRefer = {
	'en_US' : 'english',
	'zh_CN' : 'chinese',
	'fr_FR' : 'french',
	'de_DE' : 'german',
	'it_IT' : 'italian',
	'ja_JP' : 'japanese',
	'ko_KR' : 'korean',
	'pt_BR' : 'portuguese',
	'es_ES' : 'spanish'
};

export const dateFormat = {
	'yyyy/MM/dd' : 'YYYY/MM/DD',
	'dd/MM/yyyy' : 'DD/MM/YYYY',
	'MM/dd/yyyy' : 'MM/DD/YYYY'
};

export const timeFormat = {
	'24 Hours' : 'HH:mm:ss',
	'12 Hours' : 'hh:mm:ss A'
};

export const timeZone = {
	'ACT' : 'Australia/Adelaide',
	'AET' : 'Antarctica/DumontDUrville',
	'AGT' : 'America/Araguaina',
	'ART' : 'Asia/Amman',
	'AST' : 'Etc/GMT+9',
	'BET' : 'Brazil/East',
	'BST' : 'Etc/GMT-6',
	'CAT' : 'Africa/Cairo',
	'CNT' : 'America/St_Johns',
	'CTT' : 'Etc/GMT-8',
	'EAT' : 'Etc/GMT-3',
	'ECT' : 'Etc/GMT-1',
	'IET' : 'EST',
	'IST' : 'Asia/Calcutta',
	'JST' : 'Pacific/Palau',
	'MIT' : 'Pacific/Apia',
	'NET' : 'Asia/Baku',
	'NST' : 'Canada/Newfoundland',
	'PLT' : 'Asia/Aqtau',
	'PNT' : 'US/Arizona',
	'PRT' : 'America/Anguilla',
	'PST' : 'US/Pacific',
	'EST' : 'US/Eastern',
	'CST' : 'US/Central',
	'PST8PDT' : 'US/Pacific',
	'SST' : 'Asia/Magadan',
	'SystemV/AST4' : 'America/Anguilla',
	'SystemV/AST4ADT' : 'America/Anguilla',
	'SystemV/CST6' : 'US/Central',
	'SystemV/CST6CDT' : 'US/Central',
	'SystemV/EST5' : 'US/Eastern',
	'SystemV/EST5EDT' : 'US/Eastern',
	'SystemV/HST10' : 'US/Aleutian',
	'SystemV/MST7' : 'US/Arizona',
	'SystemV/MST7MDT' : 'US/Arizona',
	'SystemV/PST8' : 'US/Pacific',
	'SystemV/PST8PDT' : 'US/Pacific',
	'SystemV/YST9' : 'US/Alaska',
	'SystemV/YST9YDT' : 'US/Alaska',
	'VST' : 'Antarctica/Davis',
	'Asia/Riyadh87' : 'Asia/Riyadh',
	'Asia/Riyadh88' : 'Asia/Riyadh',
	'Asia/Riyadh89' : 'Asia/Riyadh',
	'Mideast/Riyadh87' : 'Asia/Riyadh',
	'Mideast/Riyadh88' : 'Asia/Riyadh',
	'Mideast/Riyadh89' : 'Asia/Riyadh',
	'CST6CDT' : 'CST',
	'Cuba' : 'America/Havana',
	'EST5EDT' : 'US/Eastern',
	'Egypt' : 'Africa/Cairo',
	'Eire' : 'Europe/Dublin',
	'GB-Eire' : 'Europe/Dublin',
	'GMT0' : 'GMT',
	'Greenwich' : 'GMT',
	'HST-' : 'HST',
	'Hongkong' : 'HKT',
	'Iceland' : 'UTC',
	'Iran' : 'IRST',
	'Israel' : 'Asia/Jerusalem',
	'Jamaica' : 'EST',
	'Japan' : 'JST',
	'Kwajalein' : 'Pacific/Kwajalein',
	'Libya' : 'Africa/Tripoli',
	'MST7MDT' : 'US/Arizona',
	'NZ-CHAT' : 'Pacific/Chatham',
	'Navajo' : 'MST',
	'Poland' : 'Europe/Warsaw',
	'Portugal' : 'Europe/Lisbon',
	'Singapore' : 'Asia/Singapore',
	'Turkey' : 'Asia/Istanbul',
	'Universal' : 'UTC',
	'Zulu' : 'GMT'
 };

export const statusMap = {
	'RECEIVED': 'Queued',
    'PROCESSING': 'In Progress',
    'CANCELLED': 'Cancelled',
    'FAILED': 'Failed',
    'COMPLETED': 'Completed'
   // 'SUCCESS': 'Success'
};

export const statusMapArr = [
	{ 'key': 'RECEIVED', 'value': 'Queued'},
	{ 'key': 'PROCESSING', 'value': 'In Progress'},
	{ 'key': 'CANCELLED', 'value': 'Cancelled'},
	{ 'key': 'FAILED', 'value': 'Failed'},
	{ 'key': 'COMPLETED', 'value': 'Completed'}
	// { 'key': 'SUCCESS', 'value': 'Success'}
];
