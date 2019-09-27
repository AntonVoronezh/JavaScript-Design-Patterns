const  CarFactory = modelType => modelType === 'sport' ? sportClassFactory() : familyClassFactory()

const sportClassFactory = () => new BMWsport;
const familyClassFactory = () => new BMWfamily;

class BMWsport{
    info() {return 'ADD sportClassFactory'}  
}

class BMWfamily{
    info() {return 'ADD familyClassFactory'}  
}

const a = CarFactory('sport')
const aa = CarFactory('spoddrt')

console.log('a ', a.info());
console.log('aa ', aa.info());
