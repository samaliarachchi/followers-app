import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TitleCasePipe {
    transform(value) {
        if (!value)
            return null;
        let words = value.split(' ');
        for (var i = 0; i < words.length; i++) {
            let word = words[i];
            if (i > 0 && this.isPreposition(word))
                words[i] = word.toLowerCase();
            else {
                words[i] = this.toTitleCase(word);
            }
        }
        return words.join(' ');
    }
    toTitleCase(word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    }
    isPreposition(word) {
        let prepositions = [
            'of',
            'the',
            'is',
            'and',
            'or',
            'if',
            'are',
            'they'
        ];
        return prepositions.includes(word.toLowerCase());
    }
    static { this.ɵfac = function TitleCasePipe_Factory(t) { return new (t || TitleCasePipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "titleCase", type: TitleCasePipe, pure: true }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TitleCasePipe, [{
        type: Pipe,
        args: [{
                name: 'titleCase'
            }]
    }], null, null); })();
//# sourceMappingURL=title-case.pipe.js.map