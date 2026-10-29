import { existsSync } from 'node:fs';
import { join } from 'node:path';

// True when an href like "/resume/cv.pdf" points at a file in public/, checked at build time.
export const inPublic = (href: string) => existsSync(join(process.cwd(), 'public', href));
