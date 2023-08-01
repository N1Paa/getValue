function getValue(obj, path) {
    let key = ''
    if (path[0] === '.') {
        path = path.replace('.','');
    }
    while (path !== '') {
        if (!path.includes('.') && path !== '') {
            
            key = path;

            try {
                if (obj.hasOwnProperty(key)) { 
                    return obj[key];
                } else { 
                    return Error('Невалидный путь');
                }
            } catch { 
                return Error('Невалидный путь');
            }  

        } else { 
            key = path.replace(/\..*/, '');
            path = path.replace(`${key}.`, '');
        
            try {
                obj = obj[key];
            } catch {
                return Error('Невалидный путь')
            }
        
            key = path.replace(/\..*/, '');
        } 
    }
    if (path === '') {
        return Error('Невалидный путь');
    }
}