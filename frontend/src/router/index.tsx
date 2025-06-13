import { createHashRouter, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import AdapterLayout from '../layouts/AdapterLayout'
import LoginPage from '../pages/login'
import LogsPage from '../pages/logs'
import PluginsManagementPage from '../pages/plugins/management'
import PluginsEditorPage from '../pages/plugins/editor'
import ChatChannelPage from '../pages/chat-channel'
import SandboxPage from '../pages/sandbox'
import ProfilePage from '../pages/profile'
import DashboardPage from '../pages/dashboard'
import UserManagerPage from '../pages/user-manager'
import PresetsPage from '../pages/presets'
import CloudCommunityPage from '../pages/cloud/telemetry'
import CloudPresetsMarketPage from '../pages/cloud/presets_market'
import CloudPluginsMarketPage from '../pages/cloud/plugins_market'

import SystemSettings from '../pages/settings/system'
import ModelGroupSettings from '../pages/settings/model_group'
import ThemeSettings from '../pages/settings/theme'
import AdapterTabPage from '../pages/adapter/AdapterTabPage'

const router = createHashRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Navigate to="/login" />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'chat-channel',
        element: <ChatChannelPage />,
      },
      {
        path: 'user-manager',
        element: <UserManagerPage />,
      },
      {
        path: 'presets',
        element: <PresetsPage />,
      },
      {
        path: 'logs',
        element: <LogsPage />,
      },
      {
        path: 'plugins',
        children: [
          {
            path: 'management',
            element: <PluginsManagementPage />,
          },
          {
            path: 'editor',
            element: <PluginsEditorPage />,
          },
        ],
      },
      {
        path: 'sandbox-logs',
        element: <SandboxPage />,
      },
      {
        path: 'adapters/:adapterKey',
        element: <AdapterLayout />,
        children: [
          {
            index: true,
            element: <AdapterTabPage />,
          },
          {
            path: '*',
            element: <AdapterTabPage />,
          },
        ],
      },

      {
        path: 'settings',
        children: [
          { path: 'system', element: <SystemSettings /> },
          { path: 'model-groups', element: <ModelGroupSettings /> },
          { path: 'theme', element: <ThemeSettings /> },
        ],
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'cloud/telemetry',
        element: <CloudCommunityPage />,
      },
      {
        path: 'cloud/presets-market',
        element: <CloudPresetsMarketPage />,
      },
      {
        path: 'cloud/plugins-market',
        element: <CloudPluginsMarketPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
])

export default router
