// import React from 'react';
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import SplitPane from './components/SplitPane';


const SimpleNestedExample = () => {
  const styleA = { background: '#eee' };
  const styleB = { background: '#aaa4ba' };
  const styleC = { background: '#000' };
  const styleD = { padding: '2em', fontStyle: 'italic' };
  return (
	<SplitPane split="vertical" minSize={50} maxSize={300} defaultSize={100}
			   className="primary" pane1Style={styleA} resizerStyle={styleC}>
	  <div />
	  <SplitPane split="horizontal" defaultSize="80%" paneStyle={styleD} pane2Style={styleB}>


		<div><div id='helloUpperWorld'></div></div>
		<div>
		  <div id='helloUnderWorld'></div>
		  <h1> some more text in underWorld!</h1>
		</div>

	  </SplitPane>
	</SplitPane>
  );
};

render(<SimpleNestedExample />, document.getElementById('simple-nested-example'));
render(<App name='Upper World'/>, document.getElementById('helloUpperWorld'));
render(<App name='under World'/>, document.getElementById('helloUnderWorld'));