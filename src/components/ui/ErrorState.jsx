import { AlertCircle, RefreshCw } from 'lucide-react';

const ErrorState = ({ message = 'Something went wrong', onRetry }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 w-full">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-7 h-7 text-red-500" />
                </div>
                <div className="max-w-md">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                        Unable to Load Data
                    </h3>
                    <p className="text-slate-500 mb-6">{message}</p>
                    {onRetry && (
                        <button
                            onClick={onRetry}
                            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors active:scale-95"
                        >
                            <RefreshCw className="w-4 h-4" />
                            <span>Try Again</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ErrorState;
