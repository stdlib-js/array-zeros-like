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

import Complex128Array = require( '@stdlib/array-complex128' );
import Complex64Array = require( '@stdlib/array-complex64' );
import zerosLike = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	zerosLike( [ 0, 0 ] ); // $ExpectType number[]
	zerosLike( new Float64Array( [ 0, 0 ] ) ); // $ExpectType Float64Array
	zerosLike( new Float32Array( [ 0, 0 ] ) ); // $ExpectType Float32Array
	zerosLike( new Complex128Array( [ 0, 0 ] ) ); // $ExpectType Complex128Array
	zerosLike( new Complex64Array( [ 0, 0 ] ) ); // $ExpectType Complex64Array
	zerosLike( new Int32Array( [ 0, 0 ] ) ); // $ExpectType Int32Array
	zerosLike( new Int16Array( [ 0, 0 ] ) ); // $ExpectType Int16Array
	zerosLike( new Int8Array( [ 0, 0 ] ) ); // $ExpectType Int8Array
	zerosLike( new Uint32Array( [ 0, 0 ] ) ); // $ExpectType Uint32Array
	zerosLike( new Uint16Array( [ 0, 0 ] ) ); // $ExpectType Uint16Array
	zerosLike( new Uint8Array( [ 0, 0 ] ) ); // $ExpectType Uint8Array
	zerosLike( new Uint8ClampedArray( [ 0, 0 ] ) ); // $ExpectType Uint8ClampedArray
	zerosLike( [ 'a', 'b', 'c' ] ); // $ExpectType number[]

	zerosLike( [ 0, 0 ], 'float64' ); // $ExpectType Float64Array
	zerosLike( [ 0, 0 ], 'float32' ); // $ExpectType Float32Array
	zerosLike( [ 0, 0 ], 'complex128' ); // $ExpectType Complex128Array
	zerosLike( [ 0, 0 ], 'complex64' ); // $ExpectType Complex64Array
	zerosLike( [ 0, 0 ], 'int32' ); // $ExpectType Int32Array
	zerosLike( [ 0, 0 ], 'int16' ); // $ExpectType Int16Array
	zerosLike( [ 0, 0 ], 'int8' ); // $ExpectType Int8Array
	zerosLike( [ 0, 0 ], 'uint32' ); // $ExpectType Uint32Array
	zerosLike( [ 0, 0 ], 'uint16' ); // $ExpectType Uint16Array
	zerosLike( [ 0, 0 ], 'uint8' ); // $ExpectType Uint8Array
	zerosLike( [ 0, 0 ], 'uint8c' ); // $ExpectType Uint8ClampedArray
	zerosLike( [ 0, 0 ], 'generic' ); // $ExpectType number[]
	zerosLike( new Int32Array( [ 0, 0 ] ), 'generic' ); // $ExpectType number[]
	zerosLike( [ 'a', 'b', 'c' ], 'generic' ); // $ExpectType number[]
	zerosLike( [ 'a', 'b', 'c' ], 'float64' ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is not provided an array or typed array for the first argument...
{
	zerosLike( '5' ); // $ExpectError
	zerosLike( 5 ); // $ExpectError
	zerosLike( false ); // $ExpectError
	zerosLike( true ); // $ExpectError
	zerosLike( null ); // $ExpectError
	zerosLike( undefined ); // $ExpectError
	zerosLike( {} ); // $ExpectError
	zerosLike( ( x: number ): number => x ); // $ExpectError

	zerosLike( '5', 'float32' ); // $ExpectError
	zerosLike( 5, 'float32' ); // $ExpectError
	zerosLike( false, 'float32' ); // $ExpectError
	zerosLike( true, 'float32' ); // $ExpectError
	zerosLike( null, 'float32' ); // $ExpectError
	zerosLike( undefined, 'float32' ); // $ExpectError
	zerosLike( {}, 'float32' ); // $ExpectError
	zerosLike( ( x: number ): number => x, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	zerosLike( [ 0, 0 ], '10' ); // $ExpectError
	zerosLike( [ 0, 0 ], 10 ); // $ExpectError
	zerosLike( [ 0, 0 ], false ); // $ExpectError
	zerosLike( [ 0, 0 ], true ); // $ExpectError
	zerosLike( [ 0, 0 ], null ); // $ExpectError
	zerosLike( [ 0, 0 ], [] ); // $ExpectError
	zerosLike( [ 0, 0 ], {} ); // $ExpectError
	zerosLike( [ 0, 0 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zerosLike( [ 0, 0 ], 'float64', 1 ); // $ExpectError
}
