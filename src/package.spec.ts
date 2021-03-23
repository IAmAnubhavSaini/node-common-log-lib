import log, {TypesEnum} from './package';

describe('log', () => {
    it('is a function', () => {
        expect(typeof log).toEqual('function');
    });
});

describe('TypesEnum', () => {
    it('is a bunch of strings?', () => {
        expect(Object.keys(TypesEnum)).toEqual(['INFO', 'ERROR', 'WARN', 'LOG'])
    })
})
