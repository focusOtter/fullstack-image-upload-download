import cdkoutput from './_backend/output.json'

const output = cdkoutput['YtS3BackendStack']

export const config = {
	Auth: {
		Cognito: {
			userPoolId: process.env.userPoolId || output.UserPoolId,
			userPoolClientId: process.env.userPoolClientId || output.UserPoolClientId,
			identityPoolId: process.env.identityPoolId || output.IdentityPoolId,
		},
	},
	Storage: {
		S3: {
			bucket: process.env.BucketName || output.BucketName,
			region: process.env.Region || output.Region,
		},
	},
}
