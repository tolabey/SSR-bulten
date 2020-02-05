export const MATCH = ['N'];
export const DATE = ['D'];
export const TIME = ['T'];
export const DAY = ['DAY'];
export const LIG = ['LN'];
export const MATCH_CODE = ['C']

export const MATCH_RESULT = ['OCG', '1'];
export const MIN_MATCH_REQUIRE_COUNT = [...MATCH_RESULT, 'MBS'];
export const MATCH_RESULT_1_RATE = [...MATCH_RESULT, 'OC', '0', 'O'];
export const MATCH_RESULT_1_NAME = [...MATCH_RESULT, 'OC', '0', 'N'];
export const MATCH_RESULT_1 = [...MATCH_RESULT, 'OC', '0'];

export const MATCH_RESULT_X_RATE = [...MATCH_RESULT, 'OC', '1', 'O'];
export const MATCH_RESULT_X_NAME = [...MATCH_RESULT, 'OC', '1', 'N'];
export const MATCH_RESULT_X = [...MATCH_RESULT, 'OC', '1'];

export const MATCH_RESULT_2_RATE = [...MATCH_RESULT, 'OC', '2', 'O'];
export const MATCH_RESULT_2_NAME = [...MATCH_RESULT, 'OC', '2', 'N'];
export const MATCH_RESULT_2 = [...MATCH_RESULT, 'OC', '2'];

export const DOUBLE_CHANCE = ['OCG', '2'];
export const DOUBLE_CHANCE_1_X_RATE = [...DOUBLE_CHANCE, 'OC', '3', 'O'];
export const DOUBLE_CHANCE_1_X_NAME = [...DOUBLE_CHANCE, 'OC', '3', 'N'];
export const DOUBLE_CHANCE_1_X = [...DOUBLE_CHANCE, 'OC', '3'];

export const DOUBLE_CHANCE_1_2_RATE = [...DOUBLE_CHANCE, 'OC', '4', 'O'];
export const DOUBLE_CHANCE_1_2_NAME = [...DOUBLE_CHANCE, 'OC', '4', 'N'];
export const DOUBLE_CHANCE_1_2 = [...DOUBLE_CHANCE, 'OC', '4'];

export const DOUBLE_CHANCE_X_2_RATE = [...DOUBLE_CHANCE, 'OC', '5', 'O'];
export const DOUBLE_CHANCE_X_2_NAME = [...DOUBLE_CHANCE, 'OC', '5', 'N'];
export const DOUBLE_CHANCE_X_2= [...DOUBLE_CHANCE, 'OC', '5'];


export const THRESHOLD25 = ['OCG', '5'];
export const THRESHOLD25_LOWER_RATE = [...THRESHOLD25, 'OC', '25', 'O'];
export const THRESHOLD25_LOWER_NAME = [...THRESHOLD25, 'OC', '25', 'N'];
export const THRESHOLD25_LOWER = [...THRESHOLD25, 'OC', '25'];

export const THRESHOLD25_UPPER_RATE = [...THRESHOLD25, 'OC', '26', 'O'];
export const THRESHOLD25_UPPER_NAME = [...THRESHOLD25, 'OC', '26', 'N'];
export const THRESHOLD25_UPPER = [...THRESHOLD25, 'OC', '26'];
