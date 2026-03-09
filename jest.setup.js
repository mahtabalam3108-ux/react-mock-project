import { TextEncoder, TextDecoder } from "util"; 

// Attach to global scope so all tests see them 
global.TextEncoder = TextEncoder; 
global.TextDecoder = TextDecoder;