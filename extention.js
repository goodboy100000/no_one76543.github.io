var pepopleInRoblox=getfile(CONTENT);
class roblox {
getinfo() {
id: 'robloxtoscratch',
name: 'roblox',


blocks: [
{
opcode: 'externallink',
blockType: Scratch.BlockType.REPORTER,
text: robloxExternalText,
}
{
opcode:'experinceplays'
blockType: Scratch.BlockType.BOOLEAN,
text: '[PLAYER] is in roblox'
arguments: {
PLAYER: {
type: Scratch.ArgumentType.STRING,
defaultValue: 'no_one76543'
}
]
};
}
experinceplays(args) {
return peopleInRoblox contains args.PLAYER;
}
}
Scratch.extensions.register(new Roblox());
