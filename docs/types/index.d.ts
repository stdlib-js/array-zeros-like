/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { NumericAndGenericDataTypeMap, AnyArray, TypedArray, ComplexTypedArray } from '@stdlib/types/array';

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
*
* @param x - input array from which to derive the output array length
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/array-zeros' );
*
* var x = zeros( 2, 'generic' );
* // returns [ 0, 0 ]
*
* var y = zerosLike( x );
* // returns [ 0, 0 ]
*/
declare function zerosLike( x: Array<any> ): Array<number>;

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
*
* @param x - input array from which to derive the output array length
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/array-zeros' );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x );
* // returns <Float64Array>[ 0.0, 0.0 ]
*/
declare function zerosLike<T extends TypedArray | ComplexTypedArray>( x: T ): T;

/**
* Creates a zero-filled array having the same length as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
* -   `int32`: 32-bit two's complement signed integers
* -   `uint32`: 32-bit unsigned integers
* -   `int16`: 16-bit two's complement signed integers
* -   `uint16`: 16-bit unsigned integers
* -   `int8`: 8-bit two's complement signed integers
* -   `uint8`: 8-bit unsigned integers
* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
* -   `generic`: generic JavaScript values
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var zeros = require( '@stdlib/array-zeros' );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*/
declare function zerosLike<T extends keyof NumericAndGenericDataTypeMap<number>>( x: AnyArray, dtype: T ): NumericAndGenericDataTypeMap<number>[T];


// EXPORTS //

export = zerosLike;
