import * as ComplexTypes from './complex-types';
import * as ConditionalTypes from './conditional-types';
import * as KeyOf from './keyof';
import * as ReturnTypes from './return-types';
import * as UtilityTypes from './utility-types';

//So we can keep our imports when we comment code
if(ReturnTypes || UtilityTypes || ConditionalTypes || KeyOf || ComplexTypes) {}

// ReturnTypes.exampleVoid();
// ReturnTypes.exampleUndefined();
// ReturnTypes.exampleNever();

UtilityTypes.exampleOmit();
// UtilityTypes.examplePick();
// UtilityTypes.examplePartial();
// UtilityTypes.exampleReal();

// ConditionalTypes.exampleExtends();
// ConditionalTypes.exampleUnion();
// ConditionalTypes.exampleConditional();
// ConditionalTypes.exampleFlatten();

// KeyOf.exampleKeyof();
// KeyOf.exampleForEach();
// KeyOf.exampleProperty();
// KeyOf.exampleTransform();
// KeyOf.exampleConditionalTransform();

// ComplexTypes.exampleKeyof();
// ComplexTypes.examplePartial();
// ComplexTypes.exampleDeepPartial();

console.log('The demo is ready to go!');