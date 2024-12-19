const styled = (tag) => (strs, ...exprs) => {
    const style = strs.reduce((result, str, i) => {
        const isFunc = typeof exprs[i] === 'function';
        const value = isFunc ? exprs[i](props) : exprs[i];
  
        return `${result}${str}${value ? value : ''}`;
      }, '');

    return style;
};

const style = styled('div')`
	width: 200px;
	height: 200px;
	border: 5px solid;
	border-radius: 50%;
	color: white;
	background-color: black;
	text-align: center;
	line-height: 200px;
`;

console.log(style);