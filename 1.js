/**
 * Loco js export: JavaScript function
 * Project: XML Input File.xml conversion
 * Release: Working copy
 * Locale: en-IN, English (India)
 * Exported by: Unregistered user
 * Exported at: Thu, 28 Apr 2016 13:03:38 +0100
 */
var t = function( pairs ){
    
    // named plural forms
    var pluralForms = ["one","other"];
    
    // calc numeric index of a plural form (0-1)
    function pluralIndex( n ){
        return Number( n != 1 );
    }

    // expose public t() function
    return function( msgid1, msgid2, n ){
        var value = pairs[msgid1];
        // singular if no multiplier
        if( null == n ){
            n = 1;
        }
        // plurals stored as objects, e.g. { one: "" }
        if( value instanceof Object ){
            value = value[ pluralForms[ pluralIndex(n) ] || 'one' ];
        }
        return value || ( 1 === n ? msgid1 : msgid2 ) || msgid1 || '';
    };
}(
    {"P1":"266\n        \n        none\n      \n      \n        8\n        \n          -1\n          major\n        \n        \n          F\n          4\n        \n      \n      \n      \n        \n          Chorus\n        \n      \n      \n        \n          C\n          4\n        \n        8\n        1\n        quarter\n        none\n        \n          begin\n          Ma\n        \n      \n      \n        \n          D\n          4\n        \n        8\n        1\n        quarter\n        none\n        \n          middle\n          gni\n        \n      \n      \n        \n          C\n          4\n        \n        8\n        1\n        quarter\n        none\n        \n          \n        \n        \n          middle\n          fi\n        \n      \n      \n        \n          F\n          4\n        \n        8\n        1\n        quarter\n        none\n        \n          \n        \n      \n      \n        \n          F\n          4\n        \n        8\n        1\n        quarter\n        none\n        \n          end\n          cat\n        \n      \n    \n    \n    \n      \n      \n        \n          3\n          4\n        \n      \n      \n        \n          (C.)\n        \n      \n      \n        \n        8\n        1\n        quarter\n      \n      \n        \n        8\n        1\n        quarter\n      \n      \n        \n          F\n          4\n        \n        8\n        1\n        quarter\n        down\n        \n          begin\n          A\n        \n      \n    \n    \n    \n      \n      \n        \n          F\n          4\n        \n        4\n        1\n        eighth\n        down\n        \n          middle\n          ni\n        \n      \n      \n        \n          G\n          4\n        \n        8\n        1\n        quarter\n        down\n        \n          end\n          ma\n        \n      \n      \n        \n          E\n          4\n        \n        4\n        1\n        eighth\n        down\n      \n      \n        \n          D\n          4\n        \n        6\n        1\n        eighth\n        \n        down\n        begin\n        \n          begin\n          me\n        \n      \n      \n        \n          C\n          4\n        \n        2\n        1\n        16th\n        down\n        end\n        backward hook\n      \n    \n    \n    \n      \n      \n        \n          C\n          4\n        \n        8\n        1\n        quarter\n        down\n        \n          end\n          a\n        \n      \n      \n        \n        8\n        1\n        quarter\n      \n      \n        \n          F\n          3\n        \n        4\n        1\n        eighth\n        down\n        begin\n        \n          begin\n          do\n        \n      \n      \n        \n          A\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n        end\n        \n          \n        \n      \n    \n    \n    \n      \n      \n        \n          A\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n        begin\n        \n          \n        \n      \n      \n        \n          F\n          3\n        \n        4\n        1\n        eighth\n        down\n        continue\n      \n      \n        \n          C\n          4\n        \n        4\n        1\n        eighth\n        down\n        continue\n      \n      \n        \n          A\n          3\n        \n        4\n        1\n        eighth\n        down\n        end\n      \n      \n        \n          \n        \n      \n      \n        \n          G\n          3\n        \n        8\n        1\n        quarter\n        down\n      \n    \n    \n    \n      \n      \n        \n          F\n          3\n        \n        8\n        1\n        quarter\n        down\n      \n      \n        \n          \n        \n        -6\n      \n      \n        \n        4\n        1\n        eighth\n      \n      \n        \n          F\n          4\n        \n        4\n        1\n        eighth\n        down\n      \n      \n        \n          E\n          4\n        \n        6\n        1\n        eighth\n        \n        down\n        begin\n      \n      \n        \n          D\n          4\n        \n        2\n        1\n        16th\n        down\n        end\n        backward hook\n      \n    \n    \n    \n      \n      \n        \n          F\n          4\n        \n        4\n        1\n        eighth\n        down\n        begin\n      \n      \n        \n          E\n          4\n        \n        4\n        \n        1\n        eighth\n        down\n        end\n        \n          \n        \n      \n      \n        \n          E\n          4\n        \n        2\n        \n        1\n        16th\n        down\n        begin\n        begin\n        \n          \n        \n      \n      \n        \n          D\n          4\n        \n        2\n        1\n        16th\n        down\n        continue\n        end\n      \n      \n        \n          D\n          4\n        \n        4\n        1\n        eighth\n        down\n        end\n        \n          middle\n          mi\n        \n      \n      \n        \n          C\n          1\n          4\n        \n        4\n        1\n        eighth\n        sharp\n        down\n        begin\n      \n      \n        \n          B\n          3\n        \n        2\n        1\n        16th\n        natural\n        down\n        continue\n        begin\n      \n      \n        \n          C\n          1\n          4\n        \n        2\n        1\n        16th\n        down\n        end\n        end\n      \n    \n    \n    \n      \n      \n        \n          D\n          4\n        \n        24\n        1\n        half\n        \n        down\n        \n          end\n          num.\n        \n      \n      \n        light-light\n      \n    \n    \n    \n      \n      \n        \n          D\n          4\n        \n        8\n        1\n        quarter\n        down\n        \n          single\n          Et\n        \n      \n      \n        \n          C\n          4\n        \n        4\n        1\n        eighth\n        down\n        begin\n      \n      \n        \n          F\n          4\n        \n        4\n        1\n        eighth\n        down\n        continue\n      \n      \n        \n          E\n          4\n        \n        4\n        1\n        eighth\n        down\n        continue\n      \n      \n        \n          D\n          4\n        \n        4\n        1\n        eighth\n        down\n        end\n      \n    \n    \n    \n      \n      \n        \n          F\n          4\n        \n        8\n        1\n        quarter\n        down\n        \n          begin\n          ex\n        \n      \n      \n        \n          F\n          4\n        \n        8\n        1\n        quarter\n        down\n        \n          middle\n          ul\n        \n      \n      \n        \n          F\n          4\n        \n        8\n        1\n        quarter\n        down\n        \n          middle\n          ta\n        \n      \n    \n    \n    \n      \n      \n        \n          \n        \n      \n      \n        \n          F\n          4\n        \n        8\n        1\n        quarter\n        down\n        \n          end\n          vit\n        \n      \n      \n        \n          \n        \n        2\n      \n      \n        \n          E\n          4\n        \n        8\n        1\n        quarter\n        down\n        \n          \n        \n      \n      \n        \n        8\n        1\n        quarter\n      \n    \n    \n    \n      \n      \n        \n          E\n          4\n        \n        12\n        1\n        quarter\n        \n        down\n        \n          begin\n          spi\n        \n      \n      \n        \n          D\n          4\n        \n        4\n        1\n        eighth\n        down\n      \n      \n        \n          F\n          4\n        \n        4\n        1\n        eighth\n        down\n        begin\n        \n          middle\n          ri\n        \n      \n      \n        \n          E\n          4\n        \n        4\n        1\n        eighth\n        down\n        end\n      \n    \n    \n    \n      \n      \n        \n          C\n          4\n        \n        4\n        1\n        eighth\n        down\n        begin\n      \n      \n        \n          B\n          -1\n          3\n        \n        2\n        1\n        16th\n        down\n        continue\n        begin\n      \n      \n        \n          C\n          4\n        \n        2\n        1\n        16th\n        down\n        end\n        end\n      \n      \n        \n          D\n          4\n        \n        12\n        1\n        quarter\n        \n        down\n        \n          end\n          tus\n        \n      \n      \n        \n          C\n          4\n        \n        4\n        1\n        eighth\n        down\n      \n    \n    \n    \n      \n      \n        \n          \n        \n      \n      \n        \n          A\n          3\n        \n        8\n        1\n        quarter\n        down\n        \n          begin\n          me\n        \n      \n      \n        \n          B\n          -1\n          3\n        \n        12\n        1\n        quarter\n        \n        down\n      \n      \n        \n          \n        \n        -6\n      \n      \n        \n          A\n          3\n        \n        4\n        1\n        eighth\n        down\n      \n    \n    \n    \n      \n      \n        \n          A\n          3\n        \n        12\n        1\n        quarter\n        \n        down\n      \n      \n        \n          G\n          3\n        \n        4\n        1\n        eighth\n        down\n      \n      \n        \n          G\n          3\n        \n        4\n        1\n        eighth\n        down\n        begin\n      \n      \n        \n          F\n          3\n        \n        4\n        1\n        eighth\n        down\n        end\n      \n    \n    \n    \n      \n      \n        \n          A\n          3\n        \n        16\n        1\n        half\n        down\n        \n          \n        \n        \n          end\n          us\n        \n      \n      \n        \n        8\n        1\n        quarter\n      \n    \n    \n    \n      \n      \n        \n          \n        \n      \n      \n        \n          E\n          4\n        \n        8\n        1\n        quarter\n        down\n        \n          single\n          in\n        \n      \n      \n        \n          \n        \n        5\n      \n      \n        \n          F\n          4\n        \n        12\n        1\n        quarter\n        \n        down\n      \n      \n        \n          D\n          4\n        \n        4\n        1\n        eighth\n        down","P2":"101\n        \n        none\n      \n      \n        8\n        \n          -1\n          major\n        \n        2\n        \n          F\n          4\n        \n        \n      \n      \n      \n        \n        40\n        1\n      \n    \n    \n    \n      \n      \n        \n          3\n          4\n        \n      \n      \n        \n      \n      \n        \n          (CT.)\n        \n      \n      \n        \n        8\n        \n        1\n        quarter\n      \n      \n        \n        8\n        \n        1\n        quarter\n      \n      \n        \n          F\n          3\n        \n        8\n        \n        1\n        quarter\n        down\n        \n          begin\n          A\n        \n      \n      \n        24\n      \n      \n        \n        8\n        \n        2\n        quarter\n      \n      \n        \n        8\n        \n        2\n        quarter\n      \n      \n        \n          F\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n    \n    \n    \n      \n      \n        \n          D\n          3\n        \n        4\n        \n        1\n        eighth\n        up\n        begin\n        \n          middle\n          ni\n        \n      \n      \n        \n          C\n          3\n        \n        4\n        \n        1\n        eighth\n        up\n        end\n      \n      \n        \n          E\n          3\n        \n        8\n        \n        1\n        quarter\n        down\n        \n          end\n          ma\n        \n      \n      \n        \n          F\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n        begin\n        \n          begin\n          me\n        \n      \n      \n        \n          G\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n        end\n      \n      \n        24\n      \n      \n        \n          D\n          3\n        \n        4\n        \n        2\n        eighth\n        up\n        begin\n      \n      \n        \n          C\n          3\n        \n        4\n        \n        2\n        eighth\n        up\n        end\n      \n      \n        \n          E\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n        begin\n      \n      \n        \n          G\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n        end\n      \n    \n    \n    \n      \n      \n        \n          A\n          3\n        \n        8\n        \n        1\n        quarter\n        down\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n        \n          end\n          a\n        \n      \n      \n        \n          A\n          3\n        \n        8\n        \n        1\n        quarter\n        down\n        \n          begin\n          do\n        \n      \n      \n        \n          F\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n      \n      \n        24\n      \n      \n        \n          A\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n      \n      \n        \n          A\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n      \n    \n    \n    \n      \n      \n        \n          C\n          4\n        \n        4\n        \n        1\n        eighth\n        down\n        begin\n      \n      \n        \n          A\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n        end\n      \n      \n        \n          F\n          3\n        \n        8\n        \n        1\n        quarter\n        down\n      \n      \n        \n        4\n        \n        1\n        eighth\n      \n      \n        \n          B\n          -1\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n      \n      \n        24\n      \n      \n        \n          C\n          4\n        \n        4\n        \n        2\n        eighth\n        down\n        begin\n      \n      \n        \n          A\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n        end\n      \n      \n        \n          F\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n      \n        \n        4\n        \n        2\n        eighth\n      \n      \n        \n          B\n          -1\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n      \n    \n    \n    \n      \n      \n        \n          A\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n      \n      \n        \n          C\n          4\n        \n        8\n        \n        1\n        quarter\n        down\n      \n      \n        \n          A\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n      \n      \n        \n          G\n          3\n        \n        8\n        \n        1\n        quarter\n        down\n      \n      \n        24\n      \n      \n        \n          A\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n      \n      \n        \n          C\n          4\n        \n        8\n        \n        2\n        quarter\n        down\n      \n      \n        \n          A\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n      \n      \n        \n          G\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n    \n    \n    \n      \n      \n        \n          F\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n        begin\n      \n      \n        \n          C\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n        continue\n        \n          middle\n          mi\n        \n      \n      \n        \n          D\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n        continue\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        1\n        eighth\n        down\n        end\n      \n      \n        \n          E\n          3\n        \n        8\n        \n        1\n        quarter\n        down\n      \n      \n        24\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n        begin\n      \n      \n        \n          C\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n        continue\n      \n      \n        \n          D\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n        continue\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n        end\n      \n      \n        \n          E\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n    \n    \n    \n      \n      \n        \n          D\n          3\n        \n        24\n        \n        1\n        half\n        \n        down\n        \n          end\n          num.\n        \n      \n      \n        24\n      \n      \n        \n          D\n          3\n        \n        24\n        \n        2\n        half\n        \n        down\n      \n      \n        light-light\n      \n    \n    \n    \n      \n        \n          101\n        \n      \n      \n        \n          CT.(instr.)\n        \n      \n      \n        \n          T.(instr.)\n        \n      \n      \n        \n          A\n          3\n        \n        12\n        \n        1\n        quarter\n        \n        up\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        1\n        eighth\n        up\n      \n      \n        \n          B\n          -1\n          3\n        \n        8\n        \n        1\n        quarter\n        up\n      \n      \n        24\n      \n      \n        \n          D\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n        begin\n      \n      \n        \n          A\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n        end\n      \n      \n        \n          G\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n    \n    \n    \n      \n      \n        \n          C\n          4\n        \n        8\n        \n        1\n        quarter\n        up\n      \n      \n        \n          A\n          3\n        \n        4\n        \n        1\n        eighth\n        up\n        begin\n      \n      \n        \n          G\n          3\n        \n        4\n        \n        1\n        eighth\n        up\n        end\n      \n      \n        \n          B\n          -1\n          3\n        \n        8\n        \n        1\n        quarter\n        up\n      \n      \n        24\n      \n      \n        \n          F\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n        begin\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n        end\n      \n      \n        \n          D\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n    \n    \n    \n      \n      \n        \n          B\n          -1\n          3\n        \n        8\n        \n        1\n        quarter\n        up\n      \n      \n        \n          C\n          4\n        \n        4\n        \n        1\n        eighth\n        up\n        begin\n      \n      \n        \n          B\n          -1\n          3\n        \n        4\n        \n        1\n        eighth\n        up\n        end\n      \n      \n        \n          G\n          3\n        \n        8\n        \n        1\n        quarter\n        up\n        \n          \n        \n      \n      \n        24\n      \n      \n        \n          D\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n      \n        \n          C\n          3\n        \n        16\n        \n        2\n        half\n        down\n        \n          \n        \n      \n    \n    \n    \n      \n      \n        \n          C\n          3\n        \n        16\n        \n        1\n        half\n        up\n      \n      \n        \n          B\n          -1\n          2\n        \n        8\n        \n        1\n        quarter\n        up\n      \n      \n        24\n      \n      \n        \n          G\n          3\n        \n        12\n        \n        2\n        quarter\n        \n        down\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        2\n        eighth\n        down\n      \n      \n        \n          D\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n    \n    \n    \n      \n      \n        \n          \n        \n      \n      \n        \n          \n        \n        1\n      \n      \n        \n          A\n          2\n        \n        8\n        \n        1\n        quarter\n        up\n      \n      \n        \n          \n        \n        2\n      \n      \n        \n          \n        \n        3\n      \n      \n        \n          A\n          3\n        \n        12\n        \n        1\n        quarter\n        \n        up\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        1\n        eighth\n        up\n      \n      \n        24\n      \n      \n        \n          E\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n      \n        \n          D\n          3\n        \n        16\n        \n        2\n        half\n        down\n      \n    \n    \n    \n      \n      \n        \n          \n        \n      \n      \n        \n          F\n          3\n        \n        8\n        \n        1\n        quarter\n        up\n      \n      \n        \n        8\n        \n        1\n        quarter\n      \n      \n        \n          E\n          3\n        \n        4\n        \n        1\n        eighth\n        up\n        begin\n      \n      \n        \n          E\n          3\n        \n        4\n        \n        \n        1\n        eighth\n        up\n        end\n        \n          \n        \n      \n      \n        24\n      \n      \n        \n          D\n          3\n        \n        16\n        \n        2\n        half\n        down\n      \n      \n        \n          C\n          3\n        \n        8\n        \n        \n        2\n        quarter\n        down\n        \n          \n        \n      \n    \n    \n    \n      \n      \n        \n          E\n          3\n        \n        4\n        \n        \n        1\n        eighth\n        up\n        begin\n        \n          \n        \n      \n      \n        \n          F\n          3\n        \n        4\n        \n        1\n        eighth\n        up\n        end\n      \n      \n        \n          \n        \n        1\n      \n      \n        \n          D\n          3\n        \n        4\n        \n        1\n        eighth\n        up\n      \n      \n        \n          D\n          3\n        \n        8\n        \n        1\n        quarter\n        up\n      \n      \n        \n          C\n          3\n        \n        4\n        \n        1\n        eighth\n        up\n      \n      \n        24\n      \n      \n        \n          C\n          3\n        \n        8\n        \n        \n        2\n        quarter\n        down\n        \n          \n        \n      \n      \n        \n          B\n          -1\n          2\n        \n        16\n        \n        2\n        half\n        down\n      \n    \n    \n    \n      \n      \n        \n          E\n          3\n        \n        16\n        \n        1\n        half\n        up\n        \n          \n        \n      \n      \n        \n        8\n        \n        1\n        quarter\n      \n      \n        24\n      \n      \n        \n          A\n          2\n        \n        16\n        \n        2\n        half\n        down\n        \n          \n        \n      \n      \n        \n        8\n        \n        2\n        quarter\n      \n    \n    \n    \n      \n      \n        \n          \n        \n      \n      \n        \n          A\n          2\n        \n        8\n        \n        1\n        quarter\n        up\n      \n      \n        \n          A\n          3\n        \n        12\n        \n        1\n        quarter\n        \n        up\n      \n      \n        \n          \n        \n        -5\n      \n      \n        \n          F\n          3\n        \n        4\n        \n        1\n        eighth\n        up\n      \n      \n        24\n      \n      \n        \n          C\n          3\n        \n        8\n        \n        2\n        quarter\n        down\n      \n      \n        \n          D\n          3\n        \n        16\n        \n        2\n        half\n        down"} 
);
