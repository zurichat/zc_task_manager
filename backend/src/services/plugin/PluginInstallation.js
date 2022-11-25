import PluginInstallationRepo from "../../database/repositories/PluginInstallationRepository";

class PluginInstallationService
{
    repository;

    // function __construct(PluginInstallationRepository $repository)
    // {
    //     $this->repository = $repository;
    //     $this->token = Config::get('token');
    // }

    constructor(){
        this.repository = PluginInstallationRepo();
    }

    public function install($data)
    {
        $data = $this->updateDataIfTokenSet($data);
        return $this->responseGenerator($this->repository->installPluginOnWorkspace($data));   
    }

    public function uninstall($data)
    {
        $data = $this->updateDataIfTokenSet($data);

        return $this->repository->uninstallPluginFromWorkspace($data);
    }

    private function updateDataIfTokenSet($data)
    {
        if ($data['token']) {
            $data['plugin_id'] = Config::get('plugin_id');
            return $data;
        }
        abort(401, 'Authentication Error: TOKEN MISSING.');
    }

    public function responseGenerator($response)
    {
        if($response['status'] == '200'){
            return response()->json([
                "message" => "Todo plugin installed.",
                "success" => true,
                "data" => [
                    "redirect_url" => "/todo"
                ]
            ]);
        }else{
            return response()->json($response);
        }
    }
}
