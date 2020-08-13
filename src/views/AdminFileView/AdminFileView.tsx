import React from 'react';
import { FileManager, FileNavigator } from '@opuscapita/react-filemanager';
import connectorGDrive from '@opuscapita/react-filemanager-connector-google-drive-v2';

const apiOptions = {
  CLIENT_ID: process.env.REAC_APP_GDRIVE_CLIENTID,
  API_KEY: process.env.REACT_APP_GDRIVE_APIKEY,
  DISCOVERY_DOCS: [
    'https://www.googleapis.com/discovery/v1/apis/drive/v2/rest',
  ],
  SCOPES: 'https://www.googleapis.com/auth/drive',
  locale: 'de',
};

const AdminFileView = () => {
  return (
    <div style={{ height: '480px' }}>
      <FileManager className="bg-red-400">
        <FileNavigator
          id="filemanager-1"
          api={connectorGDrive.api}
          apiOptions={apiOptions}
          capabilities={connectorGDrive.capabilities}
          listViewLayout={connectorGDrive.listViewLayout}
          viewLayoutOptions={connectorGDrive.viewLayoutOptions}
        />
      </FileManager>
    </div>
  );
};

export default AdminFileView;
