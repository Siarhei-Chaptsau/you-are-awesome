// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {property};
const createNotEnumerableProperty = (property) => {return Symbol(property)};
const createProtoMagicObject = () => {};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {return new Boolean()};
const toBuffer = () => {};
const sortByProto = (arr) => {return arr.sort((a, b) => a - b);};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.toBuffer = toBuffer;
exports.sortByProto = sortByProto;
