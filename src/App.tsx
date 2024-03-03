import { ConfigProvider, Layout, theme } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Router from './Router';
import Sidebar from './modules/Sidebar/views/Sidebar';
import { ApplicationState } from './saga';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const themeMode = useSelector((state: ApplicationState) => state.user.preferences.theme);

	return (
		<ConfigProvider
			theme={{
				// Algorithm
				algorithm: themeMode === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
				token: {
					// Seed Token
					colorPrimary: '#8a3ffc',
					colorInfo: '#8a3ffc',
				},
			}}
		>
			<Layout hasSider>
				<StyledSideBar collapsed collapsible={false} collapsedWidth={60} theme={themeMode}>
					<Sidebar />
				</StyledSideBar>
				<Layout style={{ marginLeft: 200 }}>
					<Header style={{ padding: 0, background: colorBgContainer }} hidden />
					<Content style={{ margin: '24px 16px 0', overflow: 'initial', height: '100vh' }}>
						<Router />
					</Content>
					<Footer style={{ textAlign: 'center' }} hidden>
						Wardrobe ©{new Date().getFullYear()} Created with ❤️ by Wardrobe Team
					</Footer>
				</Layout>
			</Layout>
		</ConfigProvider>
	);
};

const StyledSideBar = styled(Sider)`
	overflow: hidden;
	height: 100vh;
	position: fixed !important;
	top: 0;
	left: 0;
	bottom: 0;
`;

export default App;
