import React from 'react'


export default function Sectionpangkat(data: string) {

    var array = data.split(' ');
    var hasil = '';

    array.map((grow: string) => {

        while (grow.includes('⁰') || grow.includes('¹') || grow.includes('²') || grow.includes('³') || grow.includes('⁴') || grow.includes('⁵') || grow.includes('⁶') || grow.includes('⁷') || grow.includes('⁸') || grow.includes('⁹')) {

            grow = grow.replace(/(\d+)\⁰/g, function (match, p1) {
                var sf = '';
                for (var i = 0; i < match.slice(p1.length).length; i++) {
                    sf += '0';
                };

                if (grow.includes('**')) {
                    return p1 + sf;
                } else {
                    if(p1.includes('-')){
                        return `(${p1})` + '**' + sf;
                    }else{
                        return p1 + '**' + sf;
                    }
                }
            });

            grow = grow.replace(/(\d+)\¹/g, function (match, p1) {
                var sf = '';
                for (var i = 0; i < match.slice(p1.length).length; i++) {
                    sf += '1';
                };

                if (grow.includes('**')) {
                    return p1 + sf;
                } else {
                    if(p1.includes('-')){
                        return `(${p1})` + '**' + sf;
                    }else{
                        return p1 + '**' + sf;
                    }

                }
            });

            grow = grow.replace(/(\d+)\²/g, function (match, p1) {
                var sf = '';
                for (var i = 0; i < match.slice(p1.length).length; i++) {
                    sf += '2';
                };

                if (grow.includes('**')) {

                    return p1 + sf;
                } else {

                    if(p1.includes('-')){
                        return `(${p1})` + '**' + sf;
                    }else{
                        return p1 + '**' + sf;
                    }

                }

            });

            grow = grow.replace(/(\d+)\³/g, function (match, p1) {
                var sf = '';
                for (var i = 0; i < match.slice(p1.length).length; i++) {
                    sf += '3';
                };

                if (grow.includes('**')) {
                    return p1 + sf;
                } else {
                    if(p1.includes('-')){
                        return `(${p1})` + '**' + sf;
                    }else{
                        return p1 + '**' + sf;
                    }

                }
            });

            grow = grow.replace(/(\d+)\⁴/g, function (match, p1) {
                var sf = '';
                for (var i = 0; i < match.slice(p1.length).length; i++) {
                    sf += '4';
                };

                if (grow.includes('**')) {
                    return p1 + sf;
                } else {
                    if(p1.includes('-')){
                        return `(${p1})` + '**' + sf;
                    }else{
                        return p1 + '**' + sf;
                    }

                }
            });


            grow = grow.replace(/(\d+)\⁵/g, function (match, p1) {
                var sf = '';
                for (var i = 0; i < match.slice(p1.length).length; i++) {
                    sf += '5';
                };

                if (grow.includes('**')) {
                    return p1 + sf;
                } else {
                    if(p1.includes('-')){
                        return `(${p1})` + '**' + sf;
                    }else{
                        return p1 + '**' + sf;
                    }

                }
            });


            grow = grow.replace(/(\d+)\⁶/g, function (match, p1) {
                var sf = '';
                for (var i = 0; i < match.slice(p1.length).length; i++) {
                    sf += '6';
                };

                if (grow.includes('**')) {
                    return p1 + sf;
                } else {
                    if(p1.includes('-')){
                        return `(${p1})` + '**' + sf;
                    }else{
                        return p1 + '**' + sf;
                    }

                }
            });


            grow = grow.replace(/(\d+)\⁷/g, function (match, p1) {
                var sf = '';
                for (var i = 0; i < match.slice(p1.length).length; i++) {
                    sf += '7';
                };

                if (grow.includes('**')) {
                    return p1 + sf;
                } else {
                    if(p1.includes('-')){
                        return `(${p1})` + '**' + sf;
                    }else{
                        return p1 + '**' + sf;
                    }

                }
            });


            grow = grow.replace(/(\d+)\⁸/g, function (match, p1) {
                var sf = '';
                for (var i = 0; i < match.slice(p1.length).length; i++) {
                    sf += '8';
                };

                if (grow.includes('**')) {
                    return p1 + sf;
                } else {
                    if(p1.includes('-')){
                        return `(${p1})` + '**' + sf;
                    }else{
                        return p1 + '**' + sf;
                    }

                }
            });


            grow = grow.replace(/(\d+)\⁹/g, function (match, p1) {
                var sf = '';
                for (var i = 0; i < match.slice(p1.length).length; i++) {
                    sf += '9';
                };

                if (grow.includes('**')) {
                    return p1 + sf;
                } else {
                    if(p1.includes('-')){
                        return `(${p1})` + '**' + sf;
                    }else{
                        return p1 + '**' + sf;
                    }

                }
            });
        }

        if(grow.includes('-') && grow.includes('**')){
            var sementara = grow.split('**')
            grow = `(${sementara[0]})` + "**" + sementara[1]
        }
        
        
        hasil += grow.concat(' ');

    });
    return hasil;

}
